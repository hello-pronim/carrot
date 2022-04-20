const gamePlans = {
  website: [
    {
      id: 0,
      value: "designStage",
      title: "Design Stage",
      children: [
        {
          id: 0,
          value: "wireframeDesign",
          title: "Wireframe Design",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "prototypeDesign",
          title: "Prototype Design",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "testingOfDesign",
          title: "Testing of Design",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 1,
      value: "backendStage",
      title: "Backend Stage",
      children: [
        {
          id: 0,
          value: "buildDatabaseAndShareCredentials",
          title: "Build Database and Share Credentials",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "initializeAPIIntegration",
          title: "Initialize API Integration",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "testingOfAPIIntegration",
          title: "Testing of API Integration",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 2,
      value: "frontendStage",
      title: "Frontend Stage",
      children: [
        {
          id: 0,
          value: "uiImplementationAndDataTesting",
          title: "UI Implementation and Data Testing",
          date: "2022-03-09",
        },
        {
          id: 1,
          value: "initOrderOnlineFunction",
          title: "Init Order Online Function",
          date: "2022-03-19",
        },
        {
          id: 2,
          value: "implementNewsFeedAPI",
          title: "Implement News Feed API",
          date: "2022-04-02",
        },
      ],
    },
    {
      id: 3,
      value: "launchStage",
      title: "Launch Stage",
      children: [
        {
          id: 0,
          value: "addTermsOfUseAndPrivacyPolicy",
          title: "Add Terms of Use and Privacy Policy",
          date: "2022-04-07",
        },
        {
          id: 1,
          value: "launchDatabaseOnServer",
          title: "Launch Database on Server",
          date: "2022-04-22",
        },
        {
          id: 2,
          value: "implementOnDataModules",
          title: "Implement on Data Modules",
          date: "2022-04-02",
        },
        {
          id: 3,
          value: "finalTestingAndDeploy",
          title: "Final Testing and Deploy",
          date: "2022-04-25",
        },
      ],
    },
  ],
  mobileApp: [
    {
      id: 0,
      value: "designStage",
      title: "Design Stage",
      children: [
        {
          id: 0,
          value: "designCheckOff",
          title: "Design Checkoff",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "designRevisions",
          title: "Design Revisions (if needed)",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "finalizeDesignAndApproval",
          title: "Finalize Design and Approval",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 1,
      value: "backendStage",
      title: "Backend Stage",
      children: [
        {
          id: 0,
          value: "buildDatabaseAndShareCredentials",
          title: "Build Database and Share Credentials",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "initializeAPIIntegration",
          title: "Initialize API Integration",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "testingOfAPIIntegration",
          title: "Testing of API Integration",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 2,
      value: "frontendStage",
      title: "Frontend Stage",
      children: [
        {
          id: 0,
          value: "uiImplementationAndDataTesting",
          title: "UI Implementation and Data Testing",
          date: "2022-03-09",
        },
        {
          id: 1,
          value: "initLibrarySystemFunction",
          title: "Init Library System Function",
          date: "2022-03-19",
        },
        {
          id: 2,
          value: "statBookCheckoutFunction",
          title: "Start Book Check Out Function",
          date: "2022-04-02",
        },
      ],
    },
    {
      id: 3,
      value: "launchStage",
      title: "Launch Stage",
      children: [
        {
          id: 0,
          value: "addTermsOfUseAndPrivacyPolicy",
          title: "Add Terms of Use and Privacy Policy",
          date: "2022-04-07",
        },
        {
          id: 1,
          value: "launchDatabaseOnServer",
          title: "Launch Database on Server",
          date: "2022-04-22",
        },
        {
          id: 2,
          value: "implementOnDataModules",
          title: "Implement on Data Modules",
          date: "2022-04-02",
        },
        {
          id: 3,
          value: "finalTestingAndDeploy",
          title: "Final Testing and Deploy",
          date: "2022-04-25",
        },
      ],
    },
  ],
  logoDesign: [
    {
      id: 0,
      value: "designStageLogo1",
      title: "Design Stage - Logo 1",
      children: [
        {
          id: 0,
          value: "designSketchAndCheckoff",
          title: "Design Sketch and Checkoff",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "designRevisions",
          title: "Design Revisions (if needed)",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "finalizeDesignAndApproval",
          title: "Finalize Design and Approval",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 1,
      value: "designStateLogo2",
      title: "Design Stage - Logo 2",
      children: [
        {
          id: 0,
          value: "designSketchAndCheckoff",
          title: "Design Sketch and Checkoff",
          date: "2022-02-21",
        },
        {
          id: 1,
          value: "designRevisions",
          title: "Design Revisions (if needed)",
          date: "2022-02-29",
        },
        {
          id: 2,
          value: "finalizeDesignAndApproval",
          title: "Finalize Design and Approval",
          date: "2022-03-06",
        },
      ],
    },
    {
      id: 2,
      value: "designStageLogo3",
      title: "Design Stage - Logo 3",
      children: [
        {
          id: 0,
          value: "designSketchAndCheckoff",
          title: "Design Sketch and Checkoff",
          date: "2022-03-06",
        },
        {
          id: 1,
          value: "designRevisions",
          title: "Design Revisions (if needed)",
          date: "2022-03-13",
        },
        {
          id: 2,
          value: "finalizeDesignAndApproval",
          title: "Finalize Design and Approval",
          date: "2022-03-20",
        },
      ],
    },
  ],
  webApp: [
    {
      id: 0,
      value: "designStage",
      title: "Design Stage",
      children: [
        {
          id: 0,
          value: "wireframeDesign",
          title: "Wireframe Design",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "prototypeDesign",
          title: "Prototype Design",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "testingOfDesign",
          title: "Testing of Design",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 1,
      value: "backendStage",
      title: "Backend Stage",
      children: [
        {
          id: 0,
          value: "buildDatabaseAndShareCredentials",
          title: "Build Database and Share Credentials",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "initializeAPIIntegration",
          title: "Initialize API Integration",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "testingOfAPIIntegration",
          title: "Testing of API Integration",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 2,
      value: "frontendStage",
      title: "Frontend Stage",
      children: [
        {
          id: 0,
          value: "uiImplementationAndDataTesting",
          title: "UI Implementation and Data Testing",
          date: "2022-03-09",
        },
        {
          id: 1,
          value: "initOrderOnlineFunction",
          title: "Init Order Online Function",
          date: "2022-03-19",
        },
        {
          id: 2,
          value: "implementNewsFeedAPI",
          title: "Implement News Feed API",
          date: "2022-04-02",
        },
      ],
    },
    {
      id: 3,
      value: "launchStage",
      title: "Launch Stage",
      children: [
        {
          id: 0,
          value: "addTermsOfUseAndPrivacyPolicy",
          title: "Add Terms of Use and Privacy Policy",
          date: "2022-04-07",
        },
        {
          id: 1,
          value: "launchDatabaseOnServer",
          title: "Launch Database on Server",
          date: "2022-04-22",
        },
        {
          id: 2,
          value: "implementOnDataModules",
          title: "Implement on Data Modules",
          date: "2022-04-02",
        },
        {
          id: 3,
          value: "finalTestingAndDeploy",
          title: "Final Testing and Deploy",
          date: "2022-04-25",
        },
      ],
    },
  ],
  database: [
    {
      id: 0,
      value: "newFunctions",
      title: "New Functions",
      children: [
        {
          id: 0,
          value: "checkDatabaseCodeAndFunctions",
          title: "Check Database Code and Functions",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "initializeFunctionAPI",
          title: "Initialize Function API",
          date: "2022-02-28",
        },
        {
          id: 2,
          value: "testingOfAPIIntegrations",
          title: "Testing of API Integrations",
          date: "2022-03-07",
        },
      ],
    },
    {
      id: 1,
      value: "maintenance",
      title: "Maintenance",
      children: [
        {
          id: 0,
          value: "checkMaintenanceTasksAndCode",
          title: "Check Maintenance Tasks and Code",
          date: "2022-03-07",
        },
        {
          id: 1,
          value: "buildOutMaintenancePackages",
          title: "Build Out Maintenance Packages",
          date: "2022-03-15",
        },
        {
          id: 2,
          value: "finalizeDesignAndApproval",
          title: "Finalize Design and Approval",
          date: "2022-03-29",
        },
      ],
    },
    {
      id: 2,
      value: "buildAndTesting",
      title: "Build & Testing",
      children: [
        {
          id: 0,
          value: "scrumTestingAndSprints",
          title: "Scrum Testing and Sprints",
          date: "2022-04-07",
        },
        {
          id: 1,
          value: "launchDatabaseOnServer",
          title: "Launch Database on Server",
          date: "2022-04-22",
        },
        {
          id: 2,
          value: "implementOnDataModules",
          title: "Implement on Data Modules",
          date: "2022-04-24",
        },
        {
          id: 3,
          value: "finalTestingAndDeploy",
          title: "Final Testing and Deploy",
          date: "2022-04-25",
        },
      ],
    },
  ],
  architecture: [
    {
      id: 0,
      value: "designStage",
      title: "Design Stage",
      children: [
        {
          id: 0,
          value: "preliminaryDraftThumb",
          title: "Preliminary Draft Thumb",
          date: "2022-02-07",
        },
        {
          id: 1,
          value: "revisions",
          title: "Revisions (if applicable)",
          date: "2022-02-14",
        },
        {
          id: 2,
          value: "finalRenderingOfDraft",
          title: "Final Rendering of Draft",
          date: "2022-02-21",
        },
      ],
    },
    {
      id: 1,
      value: "checkOffStage",
      title: "Check Off Stage",
      children: [
        {
          id: 0,
          value: "engineerDeployment",
          title: "Engineer Deployment",
          date: "2022-02-21",
        },
        {
          id: 1,
          value: "designReviewOrAssessment",
          title: "Design Review / Assessment",
          date: "2022-02-29",
        },
        {
          id: 2,
          value: "finalSigOffOrApproval",
          title: "Final Sign Off / Approval",
          date: "2022-03-06",
        },
      ],
    },
  ],
};

export { gamePlans };
