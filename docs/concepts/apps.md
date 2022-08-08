---
sidebar_position: 1
---

# Apps

Cyclic apps are a combination of code from a git repository and serverless cloud infrastructure. Each app is a stack like:
- Infrastructure: Serverless cloud components - Lambda, ApiGateway, SNS/SQS etc.
- Runtime: Instrumentation and bootstrapping
- Code: Application code from git

When deployed, they service requests from browsers, servers, other apps, or anything that can call out to the internet over http.

## Infrastructure

Cyclic manages the provisioning, upgrades, instrumentation, configuration and cloud best practices to set your code up with scalable, fault tolerant, serverless infrastructure.
- **AWS Cloud**: App infrastructure is provisioned and managed as infrastructure as code (IaC) in <a href="https://aws.amazon.com/cloudformation/" target="_blank">AWS CloudFormation</a>
- **Serverless**: a cloud execution model that enables your apps to be highly scalable, they can process single requests or millions of requests on demand without having to change logic, manage clusters, tune parameters or deploy anything.
- **Fault Tolerant**: Apps have the capability to be provisioned with <a href="https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iv-multi-site-active-active/" target="_blank">active-active disaster recovery strategy</a> in all AWS regions. This means that applications can be made resilient to severe outages, limiting impact to end-users with zero downtime.
### Hosting
We describe hosting in terms of where the underlying app infrastructure is hosted. While the application code is executed on AWS Lambda compute, the Lambdas themselves can be hosted in any AWS cloud account, [ours or yours](./hosting.md).

## Runtime
The runtime is the Cyclic environment and process that manages the execution of your code.
- Bootstraps applications to run in a serverless Lambda environment 
- Marshalls/unmarshalls requests and responses from port-listening applications to ApiGateway  
- Error handling and reporting
- Captures request/response pairs to and from the application code
- Captures traces and logs generated by application code

## Code
You bring the code by connecting a git repository to Cyclic. Code is [built and deployed](../overview/build.md) on `git push` to the default branch on GitHub. Apps are directly linked to their git repositories via webhooks that Cyclic installs. 

The repos must contain a `package.json` file to inform the build and runtime processes on how to build and start apps.  

### Build
Cyclic follows the instructions provided in `package.json` scripts included in your code. The build environment is transient, all build files/memory is removed after the build. While built apps are [limited](../overview/limits.md) to 250 MB, the build environment can support up to 10GB including dev dependencies.

Cyclic will prune any devDependencies from the build directory before trying to package. Therefore move any frameworks or modules that are only needed at build time into the `devDependencies` section of your `package.json`.