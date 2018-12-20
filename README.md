# Overview

-- README needs updating.

This template can be used as the starting point for a project that will produce 
docker images.  These docker images act as micro engines for our products.

# Getting Started

To get started with this template, you will need to first fork it and make it
your own.  Execute the following to get your repository set up:

* Fork this repository 
* By default your new repository will have the same name.  This will need to 
be changed to something meaningful.  From the repository's main page, select
`edit project` from the settings button.
* From the `Rename repository` section, change the project name and the path 
values to your desired name.  Make sure you keep path and name consistent to 
avoid confusion.  When ready, rename the project.
* From the same settings page, locate the option to break the fork relationship
and break the relationship.  This will simplify future merge requests.  Note that
if this step is not taken, future merge request will default to the original
repository.

Now that your repository has been named, you are ready to configure the build
script.  Start by cloning the repository.  The first thing to do is to edit 
the `master/build.gradle` file.  You will want to change the `product` and `group`
variables to something relevant to your repository.  Note that these values will
be used in both the SonarQube scans and the binary repository.  If needed, 
change the version variable as well.

With the build script changed, you can now start adding your code to the repository.
Go ahead and delete the example project, add your projects and update the `master/settings.gradle`
file accordingly.

When the repository is ready for others to contribute, update `CONTRIBUTING.md` file and
add this repository's masters to the "List of masters for this project"

# Development environment

This template project provides the ability to set up a RAD 9.5 based development 
environment.  Before setting up an environment for the first time, you will need
to configure Gradle with the location of your RAD 9.5 installation:

1. Edit the `gradle.properties` file in your `<user home>/.gradle` directory.  E.g. `c:\users\blima\.gradle`.
2. If the file doesn't exist, create a new empty file.
3. Add a new property named `radHome` pointing to your RAD installation directory.  E.g. `radHome=c:\software\SDP95`
4. Add a new property named `libertyHome` pointing to your Liberty installation directory. E.g. `libertyHome=c:\software\liberty`
5. Save the file.

To set up a new workspace, perform the following steps:

1. Clone this repository.
2. From your local directory, cd into master `cd master`.
3. From the master directory, run `gradlew newWorkspace`.
4. This will create a new RAD workspace and import all configured projects.  The workspace is now useable in RAD.

To execute a local build, run `gradlew build` from your `master` directory.

When commits are pushed to GitLab, they are automatically built and the results
are available in the `Builds` section of the project.  When feature branches are 
merged into `master`, the `master` branch is built and if successful artifacts
are published to our [Nexus server](http://wcnexus.torolab.ibm.com:8081/nexus/).
In addition, a SonarQube validation scan is run and the results are available on
the [SonarQube server](http://wcnexus.torolab.ibm.com:9000/).

# UI development
Follow the `README` file in subproject `idc-admin-console`.

# Watson Content Hub: Push
Usage
```
gradlew clean build pushWCHAssets -PpushType=QA
```
1. Before run the command, you need have all the WCH tenant credentials in your system environment, the environment variable names are `QA_WCH_USER`, `QA_WCH_PASSWORD`, `QA_WCH_API_URL`. Otherwise you will get GradleException.
2. pushWCHAssets has dependency on prepareWCHAssets and prepareWCHManifest, prepareWCHAssets will copy the contents under `idc-admin-console/build/dist` to `idc-admin-console/build/wchAssets/assets`.
3. After prepareWCHAssets, prepareWCHManifest task will generate WCH manifest file based on the assets under `idc-admin-console/build/wchAssets/assets`.
4. when prepareWCHManifest task finished, pushWCHAssets will get the WCH Credentials based on the pushType, then it will push all the assets under `idc-admin-console/build/wchAssets/assets` to Watson Content Hub.


# Unit Test Guideline
Check the [Unit Test Guideline](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W0ef0cde2caad_4659_9684_603fd59f94e1/page/Unit%20Test%20Guideline%20for%20Karma%20and%20Jasmine) with Karma and Jasmine to get an idea of the unit tests. 
