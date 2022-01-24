import { IEditorConfig } from "collection-editor-library/lib/interfaces/editor";
export let editorConfig: IEditorConfig | undefined;
export let editorConfig_question: IEditorConfig | undefined;

editorConfig = {
  context: {
    framework: "test",
    user: {
      id: "5a587cc1-e018-4859-a0a8-e842650b9d64",
      name: "Vaibhav",
      orgIds: ["01309282781705830427"],
    },
    identifier: "do_113274017771085824116",
    channel: "01307938306521497658",
    authToken: " ",
    sid: "iYO2K6dOSdA0rwq7NeT1TDzS-dbqduvV",
    did: "7e85b4967aebd6704ba1f604f20056b6",
    uid: "bf020396-0d7b-436f-ae9f-869c6780fc45",
    additionalCategories: [
      {
        value: "Textbook",
        label: "Textbook",
      },
      {
        value: "Lesson Plan",
        label: "Lesson Plan",
      },
    ],
    pdata: {
      id: "dev.dock.portal",
      ver: "2.8.0",
      pid: "creation-portal",
    },
    contextRollup: {
      l1: "01307938306521497658",
    },
    tags: ["01307938306521497658"],
    cdata: [
      {
        id: "01307938306521497658",
        type: "sourcing_organization",
      },
      {
        type: "project",
        id: "ec5cc850-3f71-11eb-aae1-fb99d9fb6737",
      },
      {
        type: "linked_collection",
        id: "do_113140468925825024117",
      },
    ],
    timeDiff: 5,
    objectRollup: {
      l1: "do_113140468925825024117",
      l2: "do_113140468926914560125",
    },
    host: "",
    defaultLicense: "CC BY 4.0",
    endpoint: "/data/v3/telemetry",
    env: "question_set",
    cloudStorageUrls: [
      "https://s3.ap-south-1.amazonaws.com/ekstep-public-qa/",
      "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/",
      "https://dockstorage.blob.core.windows.net/sunbird-content-dock/",
    ],
    mode: "edit",
  },
  config: {
    mode: "edit",
    maxDepth: 2,
    objectType: "Collection",
    primaryCategory: "Course",
    isRoot: true,
    dialcodeMinLength: 2,
    dialcodeMaxLength: 250,
    iconClass: "fa fa-book",
    children: {},
    hierarchy: {
      level1: {
        name: "Module",
        type: "Unit",
        mimeType: "application/vnd.ekstep.content-collection",
        contentType: "CourseUnit",
        primaryCategory: "Course Unit",
        iconClass: "fa fa-folder-o",
        children: {},
      },
      level2: {
        name: "Sub-Module",
        type: "Unit",
        mimeType: "application/vnd.ekstep.content-collection",
        contentType: "CourseUnit",
        primaryCategory: "Course Unit",
        iconClass: "fa fa-folder-o",
        children: {
          Content: [
            "Explanation Content",
            "Learning Resource",
            "eTextbook",
            "Teacher Resource",
            "Course Assessment",
          ],
        },
      },
      level3: {
        name: "Sub-Sub-Module",
        type: "Unit",
        mimeType: "application/vnd.ekstep.content-collection",
        contentType: "CourseUnit",
        primaryCategory: "Course Unit",
        iconClass: "fa fa-folder-o",
        children: {
          Content: [
            "Explanation Content",
            "Learning Resource",
            "eTextbook",
            "Teacher Resource",
            "Course Assessment",
          ],
        },
      },
    },
    collection: {
      maxContentsLimit: 10,
    },
    questionSet: {
      maxQuestionsLimit: 10,
    },
    contentPolicyUrl: "/term-of-use.html",
  },
};

editorConfig_question = {
  context: {
    channel: "01309282781705830427",
    authToken: "",
    sid: "c4hzzUJYlbfLPoN2meEF6QfF3V_9o5Us",
    did: "6539921a5736199d5e1ff5b923776c23",
    uid: "ae94b68c-a535-4dce-8e7a-fb9662b0ad68",
    programId: "f09a30f0-5e34-11ec-874d-3de2a8c29d94",
    contributionOrgId: "e7328d77-42a7-44c8-84f4-8cfea235f07d",
    pdata: {
      id: "local.sunbird.portal",
      ver: "2.8.0",
      pid: "sunbird-portal",
    },
    actor: {
      id: "ae94b68c-a535-4dce-8e7a-fb9662b0ad68",
      type: "User",
    },
    contextRollup: {
      l1: "01309282781705830427",
    },
    tags: ["01309282781705830427", "01309282781705830427"],
    timeDiff: -0.877,
    endpoint: "/data/v3/telemetry",
    env: "question_editor",
    user: {
      id: "ae94b68c-a535-4dce-8e7a-fb9662b0ad68",
      orgIds: ["01309282781705830427"],
      organisations: {
        "01309282781705830427": "NIT",
      },
      fullName: "N150",
      firstName: "N150",
      lastName: "",
      isRootOrgAdmin: false,
    },
    targetFWIds: ["nit_k-12"],
    channelData: {
      code: "01309282781705830427",
      frameworks: [],
      channel: "in.ekstep",
      description: "Preprod Kayal Org",
      createdOn: "2020-08-24T05:00:51.381+0000",
      objectType: "Channel",
      collectionPrimaryCategories: [
        "Content Playlist",
        "Course",
        "Digital Textbook",
        "Question paper",
      ],
      appId: "@ignore@",
      primaryCategories: [],
      additionalCategories: [
        "DigitalCourse",
        "DigitalCourse1",
        "DigitalCourse2",
        "Exam Question Set",
        "LearningPath1",
        "Observation",
        "Survey",
        "Text Asset",
        "Video transcript",
      ],
      lastUpdatedOn: "2021-04-09T13:43:13.465+0000",
      collectionAdditionalCategories: ["Textbook", "Lesson Plan"],
      contentAdditionalCategories: [
        "Classroom Teaching Video",
        "Concept Map",
        "Curiosity Question Set",
        "Experiential Resource",
        "Explanation Video",
        "Focus Spot",
        "Learning Outcome Definition",
        "Lesson Plan",
        "Marking Scheme Rubric",
        "Pedagogy Flow",
        "Previous Board Exam Papers",
        "TV Lesson",
        "Textbook",
      ],
      apoc_num: 1,
      identifier: "01309282781705830427",
      lastStatusChangedOn: "2020-08-24T05:00:51.381+0000",
      consumerId: "7411b6bd-89f3-40ec-98d1-229dc64ce77d",
      assetAdditionalCategories: [],
      languageCode: [],
      versionKey: "1617975793465",
      contentPrimaryCategories: [
        "Course Assessment",
        "eTextbook",
        "Explanation Content",
        "Learning Resource",
        "Practice Question Set",
        "Teacher Resource",
        "Exam Question",
      ],
      name: "NIT123",
      defaultCourseFramework: "TPD",
      assetPrimaryCategories: ["Asset", "CertAsset", "Certificate Template"],
      status: "Live",
      defaultFramework: "ekstep_ncert_k-12",
    },
    labels: {
      submit_collection_btn_label: "Submit for review",
      publish_collection_btn_label: "Submit for Approval",
      sourcing_approve_collection_btn_label: "Publish",
      reject_collection_btn_label: "Request changes",
    },
    framework: "ekstep_ncert_k-12",
    correctionComments: "",
    sourcingResourceStatus: "Draft",
    sourcingResourceStatusClass: "sb-color-gray-300",
    collectionIdentifier: "do_113431883451195392169",
    unitIdentifier: "do_113431884671442944170",
    collectionObjectType: "QuestionSet",
    collectionPrimaryCategory: "Exam Question Set",
  },
  config: {
    primaryCategory: "Subjective Question",
    objectType: "Question",
    mode: "edit",
    setDefaultCopyRight: false,
    showOriginPreviewUrl: false,
    showSourcingStatus: false,
    showCorrectionComments: false,
    enableBulkUpload: false,
    publicStorageAccount: "https://dockstorage.blob.core.windows.net/",
    hideSubmitForReviewBtn: false,
    questionSet: {
      maxQuestionsLimit: 500,
    },
    collection: {
      maxContentsLimit: 1200,
    },
    editableFields: {
      orgreview: ["name", "learningOutcome"],
      sourcingreview: ["name", "learningOutcome"],
    },
    mimeType: "application/vnd.sunbird.question",
    isReadOnlyMode: false,
    interactionType: "default",
    questionCategory: "VSA",
  },
};

export const toolbarConfig_question = {
  preview_collection_btn_label: "Preview",
  preview_collection_btn_icon: "icon eye",
  save_collection_btn_label: "Save as Draft",
  save_collection_btn_icon: "",
  submit_collection_btn_label: "Submit for review",
  submit_collection_btn_icon: "",
  reject_collection_btn_label: "Request changes",
  reject_collection_btn_icon: "",
  publish_collection_btn_label: "Submit for Approval",
  publish_collection_btn_icon: "",
  edit_question_btn_label: "Edit",
  edit_question_btn_icon: "icon edit",
  preview_question_btn_label: "Preview",
  preview_question_btn_icon: "icon eye",
  cancel_question_btn_label: "Cancel",
  cancel_question_btn_icon: "",
  save_question_btn_label: "Save",
  save_question_btn_icon: "",
  send_back_for_correction_collection_btn_label: "Send Back For Corrections",
  send_back_for_correction_collection_btn_icon: "",
  sourcing_approve_collection_btn_label: "Publish",
  sourcing_approve_collection_btn_icon: "",
  sourcing_reject_collection_btn_label: "Reject",
  sourcing_reject_collection_btn_icon: "",
  upload_use_btn_label: "Upload and Use",
  cancel_btn_label: "Cancel",
  back_btn_label: "Back",
  search_btn_label: "Search",
  add_btn_label: "Add",
  upload_from_computer_btn_label: "Upload from Computer",
  request_btn_label: "Request",
  no_btn_label: "No",
  yes_btn_label: "Yes",
  close_btn_label: "Close",
  submit_btn_label: "Submit",
  add_sibling_btn_label: "Add Sibling",
  add_child_btn_label: "Add Child",
  create_new_btn_label: "Create New",
  add_from_library_btn_label: " Add from library",
  submit_review_btn_label: "Submit Review",
  apply_btn_label: "Apply",
  reset_btn_label: "Reset",
  delete_btn_label: "Delete",
  next_btn_label: "Next",
  remove_btn_label: "Remove",
  done_btn_label: "Done",
  showDialcode: "no",
  showBulkUploadBtn: false,
};

export const nativeElement = `<div><ul id="ft-id-1" class="ui-fancytree fancytree-container fancytree-plain fancytree-ext-glyph fancytree-ext-dnd5 fancytree-connectors" tabindex="0" role="tree" aria-multiselectable="true"><li role="treeitem" aria-expanded="false" aria-selected="false" class="fancytree-lastsib"><span class="fancytree-node fancytree-folder fancytree-has-children fancytree-lastsib fancytree-exp-cl fancytree-ico-cf" draggable="true"><span role="button" class="fancytree-expander fa fa-caret-right"></span><span role="presentation" class="fancytree-custom-icon fa fa-book"></span><span class="fancytree-title" title="SB23410q" style="width:15em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden">SB23410q</span><span class="ui dropdown sb-dotted-dropdown" autoclose="itemClick" suidropdown="" tabindex="0" style="display: none;"> <span id="contextMenu" class="p-0 w-auto"><i class="icon ellipsis vertical sb-color-black"></i></span>
  <span id="contextMenuDropDown" class="menu transition hidden" suidropdownmenu="" style="">
    <div id="addchild" class="item">Add Child</div>
  </span>
  </span></span></li></ul></div>`;

export const getCategoryDefinitionResponse = {
  id: "api.object.category.definition.read",
  ver: "3.0",
  ts: "2021-06-23T11:43:39ZZ",
  params: {
    resmsgid: "7efb262e-1b7e-44b7-8fe8-ceddc963cf47",
    msgid: null,
    err: null,
    status: "successful",
    errmsg: null,
  },
  responseCode: "OK",
  result: {
    objectCategoryDefinition: {
      identifier: "obj-cat:multiple-choice-question_question_all",
      objectMetadata: {
        config: {},
        schema: {
          properties: {
            mimeType: {
              type: "string",
              enum: ["application/vnd.sunbird.question"],
            },
            interactionTypes: {
              type: "array",
              items: {
                type: "string",
                enum: ["choice"],
              },
            },
            generateDIALCodes: {
              default: "Yes",
            },
          },
        },
      },
      languageCode: [],
      name: "Multiple Choice Question",
      forms: {},
    },
  },
};

export const editorServiceSelectedChildren = {
  mimeType: "application/vnd.sunbird.question",
  primaryCategory: "Multiple Choice Question",
  interactionType: "choice",
};

export const csvExport = {
  successExport: {
    id: "api.collection.export",
    ver: "4.0",
    ts: "2021-07-05T09:58:51ZZ",
    params: {
      resmsgid: "0801c119-ad94-4eb9-809c-998ed95789ea",
      msgid: null,
      err: null,
      status: "successful",
      errmsg: null,
    },
    responseCode: "OK",
    result: {
      collection: {
        tocUrl:
          "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/course/toc/do_11331579492804198413_untitled-course_1625465046239.csv",
        ttl: "54000",
      },
    },
  },
  errorExport: {
    id: "api.collection.export",
    ver: "4.0",
    ts: "2021-07-05T10:25:41ZZ",
    params: {
      resmsgid: "19a77469-4de8-41b6-857c-d0bea04db7f4",
      msgid: null,
      err: "COLLECTION_CHILDREN_NOT_EXISTS",
      status: "failed",
      errmsg: "No Children Exists for given Collection.",
    },
    responseCode: "CLIENT_ERROR",
    result: {
      messages: null,
    },
  },
};
export const hirearchyGet = {
  id: "api.content.hierarchy.get",
  ver: "3.0",
  ts: "2021-07-07T12:58:28ZZ",
  params: {
    resmsgid: "53fdfd79-2ab3-4c1c-8e4a-dc3a44ca3dbd",
    msgid: null,
    err: null,
    status: "successful",
    errmsg: null,
  },
  responseCode: "OK",
  result: {
    content: {
      ownershipType: ["createdBy"],
      copyright: "NIT123",
      keywords: ["test"],
      subject: ["English", "Hindi"],
      targetMediumIds: ["nit_k-12_medium_hindi"],
      channel: "01309282781705830427",
      organisation: ["NIT"],
      language: ["English"],
      mimeType: "application/vnd.ekstep.content-collection",
      targetGradeLevelIds: ["nit_k-12_gradelevel_grade-2"],
      objectType: "Content",
      appIcon: "",
      primaryCategory: "Course",
      children: [],
      contentEncoding: "gzip",
      lockKey: "6ea80434-00b2-4e43-a872-20c34ee78615",
      generateDIALCodes: "Yes",
      contentType: "Course",
      trackable: {
        enabled: "Yes",
        autoBatch: "Yes",
      },
      identifier: "do_113316577504272384141",
      audience: ["Student"],
      subjectIds: ["nit_k-12_subject_english", "nit_k-12_subject_hindi"],
      visibility: "Default",
      consumerId: "273f3b18-5dda-4a27-984a-060c7cd398d3",
      discussionForum: {
        enabled: "Yes",
      },
      mediaType: "content",
      osId: "org.ekstep.quiz.app",
      languageCode: ["en"],
      version: 2,
      license: "CC BY 4.0",
      name: "Course",
      targetBoardIds: ["nit_k-12_board_ncert"],
      status: "Draft",
      code: "org.sunbird.TEDujL",
      credentials: {
        enabled: "Yes",
      },
      description: "Enter description for Course",
      idealScreenSize: "normal",
      createdOn: "2021-07-06T08:06:17.392+0000",
      targetSubjectIds: ["nit_k-12_subject_hindi"],
      copyrightYear: 2021,
      contentDisposition: "inline",
      lastUpdatedOn: "2021-07-07T12:20:44.344+0000",
      dialcodeRequired: "No",
      lastStatusChangedOn: "2021-07-06T08:06:17.392+0000",
      createdFor: ["01309282781705830427"],
      creator: "N11",
      os: ["All"],
      targetFWIds: ["nit_k-12"],
      versionKey: "1625660444344",
      idealScreenDensity: "hdpi",
      framework: "nit_k-12",
      depth: 0,
      createdBy: "5a587cc1-e018-4859-a0a8-e842650b9d64",
      compatibilityLevel: 1,
      userConsent: "Yes",
      timeLimits: "{}",
      resourceType: "Course",
    },
  },
};

export const categoryDefinition = {
  result: {
    objectCategoryDefinition: {
      forms: {
        unitMetadata: {
          properties: { code: "name", editable: true },
        },
        create: {
          properties: [
            {
              name: "Basic details",
              fields: [
                {
                  code: "name",
                  name: "Name",
                  label: "Observation Name",
                  placeholder: "Observation Name",
                  description: "Observation Name",
                  dataType: "text",
                  inputType: "text",
                  editable: true,
                  required: true,
                  visible: true,
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  validations: [
                    {
                      type: "maxLength",
                      value: "120",
                      message: "Entered name is too long",
                    },
                    {
                      type: "required",
                      message: "Name is required",
                    },
                  ],
                },
                {
                  code: "entityType",
                  dataType: "text",
                  description:
                    "Select the entity i.e. district, block, cluster, schools for which the form is designed and is to be taken up. The users will be able to conduct observations for only the selected type of entities.",
                  editable: true,
                  inputType: "select",
                  label: "Entity Type",
                  name: "entityType",
                  placeholder: "Entity Type",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  required: true,
                  visible: true,
                  range: ["School", "Block", "Cluster", "District"],
                  validations: [
                    {
                      type: "required",
                      message: "Name is required",
                    },
                  ],
                },
                {
                  code: "keywords",
                  name: "Keywords",
                  label: "Keywords",
                  placeholder: "Add Keywords",
                  description: "Keywords for the Question Set",
                  dataType: "list",
                  inputType: "keywords",
                  editable: true,
                  required: false,
                  visible: true,
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                },
                {
                  code: "language",
                  name: "Primary Language",
                  label: "Select Language 1",
                  placeholder: "Select Language 1",
                  description: "Select Language 1",
                  default: ["English"],
                  dataType: "list",
                  inputType: "select",
                  editable: true,
                  output: "label",
                  required: true,
                  visible: true,
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  range: [
                    {
                      value: "en",
                      label: "English",
                    },
                    {
                      value: "hi",
                      label: "Hindi",
                    },
                    {
                      value: "ur",
                      label: "Urdu",
                    },
                  ],
                  validations: [
                    {
                      type: "required",
                      message: "Primary Language is required",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              fields: [
                {
                  code: "audience",
                  dataType: "list",
                  description: "Suggested User Type",
                  editable: true,
                  inputType: "nestedselect",
                  label: "Suggested User Type",
                  name: "userTypes",
                  placeholder: "Suggested User Type",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  required: false,
                  visible: true,
                  range: [
                    "Education Official",
                    "School leaders (HMs)",
                    "Teachers",
                    "Students",
                    "Parents",
                    "Parent",
                    "Others",
                  ],
                },
                {
                  code: "description",
                  name: "Description",
                  label: "Description",
                  placeholder: "Enter Description",
                  description: "Description of the Question Set",
                  dataType: "text",
                  inputType: "textarea",
                  editable: true,
                  required: false,
                  visible: true,
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                },
                {
                  code: "allowScoring",
                  name: "allowScoring",
                  label: "Enable Scoring",
                  placeholder: "Enable Scoring",
                  description:
                    "Select to enable the option of scoring for questions in the form. Score can be added to questions only if this is selected",
                  dataType: "text",
                  inputType: "checkbox",
                  editable: true,
                  required: false,
                  visible: true,
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                },
              ],
            },
          ],
        },
        search: {
          properties: { code: "name", editable: true },
        },
        childMetadata: {
          properties: { code: "name", editable: true },
        },
      },
    },
  },
};

export const hierarchyResponse = [
  {
    result: {
      content: {
        ownershipType: ["createdBy"],
        copyright: "NIT123",
        keywords: ["test course"],
        subject: ["English", "Hindi"],
        targetMediumIds: ["nit_k-12_medium_english"],
        channel: "01309282781705830427",
        organisation: ["NIT"],
        language: ["English"],
        mimeType: "application/vnd.ekstep.content-collection",
        targetGradeLevelIds: ["nit_k-12_gradelevel_grade-1"],
        objectType: "Content",
        // tslint:disable-next-line:max-line-length
        appIcon:
          "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_113253856016146432127/artifact/do_113253856016146432127_1617902346121_image.jpg",
        primaryCategory: "Course",
        children: [
          {
            ownershipType: ["createdBy"],
            parent: "do_113316550746677248131",
            code: "89be24d9-d098-39c0-9680-0d0e3df3c647",
            keywords: ["unit-1"],
            credentials: {
              enabled: "No",
            },
            channel: "01309282781705830427",
            description: "unit-1",
            language: ["English"],
            mimeType: "application/vnd.ekstep.content-collection",
            idealScreenSize: "normal",
            createdOn: "2021-07-06T07:15:40.525+0000",
            objectType: "Content",
            primaryCategory: "Course Unit",
            children: [
              {
                ownershipType: ["createdBy"],
                parent: "do_113316552626380800133",
                code: "d6067beb-01f9-a634-13a4-c453fc3d05d9",
                keywords: ["unit-1.1"],
                credentials: {
                  enabled: "No",
                },
                channel: "01309282781705830427",
                description: "unit-1.1",
                language: ["English"],
                mimeType: "application/vnd.ekstep.content-collection",
                idealScreenSize: "normal",
                createdOn: "2021-07-06T07:15:50.428+0000",
                objectType: "Content",
                primaryCategory: "Course Unit",
                children: [
                  {
                    ownershipType: ["createdBy"],
                    parent: "do_113316552707506176135",
                    unitIdentifiers: ["do_1133124409146736641472"],
                    copyright: "2021",
                    previewUrl:
                      "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_1133124455783546881476/artifact/do_1133124455783546881476_1625054498447_dummy.pdf",
                    subject: ["Mathematics"],
                    channel: "01309282781705830427",
                    downloadUrl:
                      "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/ecar_files/do_1133124455783546881476/content-name-is-more-than-30-charcater_1625054501658_do_1133124455783546881476_1.0.ecar",
                    language: ["English"],
                    source:
                      "https://dock.sunbirded.org/api/content/v1/read/do_1133124455783546881476",
                    mimeType: "application/pdf",
                    variants: {
                      spine: {
                        ecarUrl:
                          "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/ecar_files/do_1133124455783546881476/content-name-is-more-than-30-charcater_1625054501895_do_1133124455783546881476_1.0_spine.ecar",
                        size: 1487,
                      },
                    },
                    objectType: "Content",
                    se_mediums: ["Hindi"],
                    gradeLevel: ["Class 1"],
                    primaryCategory: "eTextbook",
                    appId: "dev.dock.portal",
                    contentEncoding: "identity",
                    artifactUrl:
                      "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_1133124455783546881476/artifact/do_1133124455783546881476_1625054498447_dummy.pdf",
                    sYS_INTERNAL_LAST_UPDATED_ON:
                      "2021-06-30T12:01:42.209+0000",
                    contentType: "eTextBook",
                    se_gradeLevels: ["Class 1"],
                    trackable: {
                      enabled: "No",
                      autoBatch: "No",
                    },
                    identifier: "do_1133124455783546881476",
                    audience: ["Student"],
                    visibility: "Default",
                    author: "Vai",
                    consumerId: "273f3b18-5dda-4a27-984a-060c7cd398d3",
                    discussionForum: {
                      enabled: "Yes",
                    },
                    index: 1,
                    mediaType: "content",
                    osId: "org.ekstep.quiz.app",
                    languageCode: ["en"],
                    lastPublishedBy: "5a587cc1-e018-4859-a0a8-e842650b9d64",
                    version: 2,
                    pragma: ["external"],
                    se_subjects: ["Mathematics"],
                    license: "CC BY 4.0",
                    prevState: "Review",
                    size: 14040,
                    lastPublishedOn: "2021-06-30T12:01:41.657+0000",
                    name: "content name is more than 30 charcater",
                    status: "Live",
                    code: "92db93d1-9a9b-61aa-9b6d-66bbb979f4ad",
                    credentials: {
                      enabled: "No",
                    },
                    prevStatus: "Processing",
                    origin: "do_1133124455783546881476",
                    streamingUrl:
                      "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_1133124455783546881476/artifact/do_1133124455783546881476_1625054498447_dummy.pdf",
                    medium: ["Hindi"],
                    idealScreenSize: "normal",
                    createdOn: "2021-06-30T12:01:38.105+0000",
                    se_boards: ["CBSE"],
                    processId: "7b4d85eb-1167-4e99-9941-2091961dfac8",
                    contentDisposition: "inline",
                    lastUpdatedOn: "2021-06-30T12:01:41.299+0000",
                    originData: {
                      identifier: "do_1133124455783546881476",
                      repository:
                        "https://dock.sunbirded.org/api/content/v1/read/do_1133124455783546881476",
                    },
                    collectionId: "do_1133124409135595521471",
                    dialcodeRequired: "No",
                    lastStatusChangedOn: "2021-06-30T12:01:42.198+0000",
                    createdFor: ["01309282781705830427"],
                    creator: "Vai",
                    os: ["All"],
                    cloudStorageKey:
                      "content/do_1133124455783546881476/artifact/do_1133124455783546881476_1625054498447_dummy.pdf",
                    se_FWIds: ["ekstep_ncert_k-12"],
                    pkgVersion: 1,
                    versionKey: "1625054501299",
                    idealScreenDensity: "hdpi",
                    framework: "ekstep_ncert_k-12",
                    depth: 3,
                    s3Key:
                      "ecar_files/do_1133124455783546881476/content-name-is-more-than-30-charcater_1625054501658_do_1133124455783546881476_1.0.ecar",
                    lastSubmittedOn: "2021-06-30T12:01:39.984+0000",
                    createdBy: "d3d05422-1670-4c3e-9051-13c306e89a95",
                    compatibilityLevel: 4,
                    board: "CBSE",
                    programId: "537c2280-d999-11eb-882d-db3e4f86a45f",
                  },
                ],
                contentDisposition: "inline",
                lastUpdatedOn: "2021-07-06T07:15:50.428+0000",
                contentEncoding: "gzip",
                contentType: "CourseUnit",
                dialcodeRequired: "No",
                trackable: {
                  enabled: "No",
                  autoBatch: "No",
                },
                identifier: "do_113316552707506176135",
                lastStatusChangedOn: "2021-07-06T07:15:50.428+0000",
                audience: ["Student"],
                os: ["All"],
                visibility: "Parent",
                discussionForum: {
                  enabled: "Yes",
                },
                index: 1,
                mediaType: "content",
                osId: "org.ekstep.launcher",
                languageCode: ["en"],
                version: 2,
                versionKey: "1625555750428",
                license: "CC BY 4.0",
                idealScreenDensity: "hdpi",
                depth: 2,
                compatibilityLevel: 1,
                name: "unit-1.1",
                timeLimits: {},
                status: "Draft",
                level: 3,
              },
            ],
            contentDisposition: "inline",
            lastUpdatedOn: "2021-07-06T07:15:40.525+0000",
            contentEncoding: "gzip",
            contentType: "CourseUnit",
            dialcodeRequired: "No",
            trackable: {
              enabled: "No",
              autoBatch: "No",
            },
            identifier: "do_113316552626380800133",
            lastStatusChangedOn: "2021-07-06T07:15:40.525+0000",
            audience: ["Student"],
            os: ["All"],
            visibility: "Parent",
            discussionForum: {
              enabled: "Yes",
            },
            index: 1,
            mediaType: "content",
            osId: "org.ekstep.launcher",
            languageCode: ["en"],
            version: 2,
            versionKey: "1625555740525",
            license: "CC BY 4.0",
            idealScreenDensity: "hdpi",
            depth: 1,
            compatibilityLevel: 1,
            name: "unit-1",
            timeLimits: {},
            status: "Draft",
            level: 2,
          },
        ],
        contentEncoding: "gzip",
        collaborators: ["5c3a2a46-4830-4ade-a4cd-b6780635569c"],
        lockKey: "49d5e059-5ff7-444c-bcf5-84e293f8da7c",
        generateDIALCodes: "Yes",
        contentType: "Course",
        trackable: {
          enabled: "Yes",
          autoBatch: "Yes",
        },
        identifier: "do_113316550746677248131",
        audience: ["Student"],
        subjectIds: ["nit_k-12_subject_english", "nit_k-12_subject_hindi"],
        visibility: "Default",
        consumerId: "273f3b18-5dda-4a27-984a-060c7cd398d3",
        childNodes: [
          "do_1133124455783546881476",
          "do_113316552707506176135",
          "do_113316552626380800133",
        ],
        discussionForum: {
          enabled: "Yes",
        },
        mediaType: "content",
        osId: "org.ekstep.quiz.app",
        languageCode: ["en"],
        version: 2,
        license: "CC BY 4.0",
        name: "test course",
        targetBoardIds: ["nit_k-12_board_cbse"],
        status: "Draft",
        code: "org.sunbird.Yj12wV",
        credentials: {
          enabled: "Yes",
        },
        description: "test course1",
        idealScreenSize: "normal",
        createdOn: "2021-07-06T07:11:51.103+0000",
        targetSubjectIds: ["nit_k-12_subject_english"],
        copyrightYear: 2021,
        contentDisposition: "inline",
        additionalCategories: ["Lesson Plan", "Textbook"],
        lastUpdatedOn: "2021-07-06T07:23:08.357+0000",
        dialcodeRequired: "No",
        lastStatusChangedOn: "2021-07-06T07:11:51.103+0000",
        createdFor: ["01309282781705830427"],
        creator: "N11",
        os: ["All"],
        targetFWIds: ["nit_k-12"],
        versionKey: "1625556188357",
        idealScreenDensity: "hdpi",
        framework: "nit_k-12",
        depth: 0,
        createdBy: "5a587cc1-e018-4859-a0a8-e842650b9d64",
        compatibilityLevel: 1,
        userConsent: "Yes",
        timeLimits: "{}",
        resourceType: "Course",
        level: 1,
      },
    },
  },
];

export const categoryDefinitionData = {
  id: "api.object.category.definition.read",
  ver: "3.0",
  ts: "2021-07-07T17:25:31ZZ",
  params: {
    resmsgid: "8306af95-5259-4a3d-ab11-2d81586b8d30",
    msgid: null,
    err: null,
    status: "successful",
    errmsg: null,
  },
  responseCode: "OK",
  result: {
    objectCategoryDefinition: {
      identifier: "obj-cat:course_collection_01309282781705830427",
      objectMetadata: {
        config: {
          frameworkMetadata: {
            orgFWType: ["K-12", "TPD"],
            targetFWType: ["K-12"],
          },
          sourcingSettings: {
            collection: {
              maxDepth: 4,
              objectType: "Collection",
              primaryCategory: "Course",
              isRoot: true,
              iconClass: "fa fa-book",
              children: {},
              hierarchy: {
                level1: {
                  name: "Course Unit",
                  type: "Unit",
                  mimeType: "application/vnd.ekstep.content-collection",
                  contentType: "CourseUnit",
                  primaryCategory: "Course Unit",
                  iconClass: "fa fa-folder-o",
                  children: {},
                },
                level2: {
                  name: "Course Unit",
                  type: "Unit",
                  mimeType: "application/vnd.ekstep.content-collection",
                  contentType: "CourseUnit",
                  primaryCategory: "Course Unit",
                  iconClass: "fa fa-folder-o",
                  children: {
                    Content: [],
                  },
                },
                level3: {
                  name: "Course Unit",
                  type: "Unit",
                  mimeType: "application/vnd.ekstep.content-collection",
                  contentType: "CourseUnit",
                  primaryCategory: "Course Unit",
                  iconClass: "fa fa-folder-o",
                  children: {
                    Content: [],
                  },
                },
                level4: {
                  name: "Course Unit",
                  type: "Unit",
                  mimeType: "application/vnd.ekstep.content-collection",
                  contentType: "CourseUnit",
                  primaryCategory: "Course Unit",
                  iconClass: "fa fa-folder-o",
                  children: {
                    Content: [],
                  },
                },
              },
            },
          },
        },
        schema: {
          properties: {
            trackable: {
              type: "object",
              properties: {
                enabled: {
                  type: "string",
                  enum: ["Yes", "No"],
                  default: "Yes",
                },
                autoBatch: {
                  type: "string",
                  enum: ["Yes", "No"],
                  default: "Yes",
                },
              },
              default: {
                enabled: "Yes",
                autoBatch: "Yes",
              },
              additionalProperties: false,
            },
            monitorable: {
              type: "array",
              items: {
                type: "string",
                enum: ["progress-report", "score-report"],
              },
            },
            credentials: {
              type: "object",
              properties: {
                enabled: {
                  type: "string",
                  enum: ["Yes", "No"],
                  default: "Yes",
                },
              },
              default: {
                enabled: "Yes",
              },
              additionalProperties: false,
            },
            userConsent: {
              type: "string",
              enum: ["Yes", "No"],
              default: "Yes",
            },
            mimeType: {
              type: "string",
              enum: ["application/vnd.ekstep.content-collection"],
            },
            generateDIALCodes: {
              type: "string",
              enum: ["Yes", "No"],
              default: "Yes",
            },
          },
        },
      },
      languageCode: [],
      name: "Course",
      forms: {
        create: {
          templateName: "",
          required: [],
          properties: [
            {
              name: "First Section",
              fields: [
                {
                  code: "appIcon",
                  dataType: "text",
                  description: "appIcon of the content",
                  editable: true,
                  inputType: "appIcon",
                  label: "Icon",
                  name: "Icon",
                  placeholder: "Icon",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  required: true,
                  visible: true,
                },
                {
                  code: "name",
                  dataType: "text",
                  description: "Name of the content",
                  editable: true,
                  inputType: "text",
                  label: "Title",
                  name: "Name",
                  placeholder: "Title",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  required: true,
                  visible: true,
                  validations: [
                    {
                      type: "maxLength",
                      value: "120",
                      message: "Input is Exceeded",
                    },
                    {
                      type: "required",
                      message: "Title is required",
                    },
                  ],
                },
                {
                  code: "description",
                  dataType: "text",
                  description: "Description of the content",
                  editable: true,
                  inputType: "textarea",
                  label: "Description",
                  name: "Description",
                  placeholder: "Description",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  required: false,
                  visible: true,
                  validations: [
                    {
                      type: "maxLength",
                      value: "256",
                      message: "Input is Exceeded",
                    },
                  ],
                },
                {
                  code: "keywords",
                  visible: true,
                  editable: true,
                  dataType: "list",
                  name: "Keywords",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  description: "Keywords for the content",
                  inputType: "keywords",
                  label: "Keywords",
                  placeholder: "Enter Keywords",
                  required: false,
                  validations: [],
                },
              ],
            },
            {
              name: "Second Section",
              fields: [
                {
                  code: "dialcodeRequired",
                  dataType: "text",
                  description: "QR CODE REQUIRED",
                  editable: true,
                  default: "No",
                  index: 5,
                  inputType: "radio",
                  label: "QR code required",
                  name: "dialcodeRequired",
                  placeholder: "QR code required",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  range: ["Yes", "No"],
                  required: false,
                  visible: true,
                },
                {
                  code: "dialcodes",
                  depends: ["dialcodeRequired"],
                  dataType: "list",
                  description: "Digital Infrastructure for Augmented Learning",
                  editable: true,
                  inputType: "dialcode",
                  label: "QR code",
                  name: "dialcode",
                  placeholder: "Enter code here",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  required: true,
                  visible: true,
                  validations: [
                    {
                      type: "minLength",
                      value: "2",
                    },
                    {
                      type: "maxLength",
                      value: "20",
                    },
                  ],
                },
              ],
            },
            {
              name: "Third Section",
              fields: [
                {
                  code: "primaryCategory",
                  dataType: "text",
                  description: "Type",
                  editable: false,
                  renderingHints: {},
                  inputType: "select",
                  label: "Category",
                  name: "Type",
                  placeholder: "",
                  required: true,
                  visible: true,
                  validations: [],
                },
                {
                  code: "additionalCategories",
                  dataType: "list",
                  depends: ["primaryCategory"],
                  description: "Additonal Category of the Content",
                  editable: true,
                  inputType: "nestedselect",
                  label: "Additional Category",
                  name: "Additional Category",
                  placeholder: "Select Additional Category",
                  renderingHints: {},
                  required: false,
                  visible: true,
                },
              ],
            },
            {
              name: "Organisation Framework Terms",
              fields: [
                {
                  code: "framework",
                  visible: true,
                  editable: true,
                  dataType: "text",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  description: "",
                  label: "Course Type",
                  required: true,
                  name: "Framework",
                  inputType: "framework",
                  placeholder: "Select Course Type",
                  output: "identifier",
                  validations: [
                    {
                      type: "required",
                      message: "Course Type is required",
                    },
                  ],
                },
                {
                  code: "subjectIds",
                  visible: true,
                  editable: true,
                  dataType: "list",
                  depends: ["framework"],
                  sourceCategory: "subject",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  description: "",
                  label: "Subjects covered in the course",
                  required: true,
                  name: "Subject",
                  inputType: "frameworkCategorySelect",
                  placeholder: "Select Subject(s)",
                  output: "identifier",
                  validations: [
                    {
                      type: "required",
                      message: "Subjects Taught is required",
                    },
                  ],
                },
                {
                  code: "topicsIds",
                  visible: true,
                  editable: true,
                  dataType: "list",
                  depends: ["framework", "subjectIds"],
                  sourceCategory: "topic",
                  renderingHints: {},
                  name: "Topic",
                  description: "Choose a Topics",
                  inputType: "topicselector",
                  label: "Topics covered in the course",
                  placeholder: "Choose Topics",
                  required: false,
                  output: "identifier",
                },
              ],
            },
            {
              name: "Target Framework Terms",
              fields: [
                {
                  code: "audience",
                  dataType: "list",
                  description: "Audience",
                  editable: true,
                  inputType: "nestedselect",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  label: "Audience Type",
                  name: "Audience Type",
                  placeholder: "Select Audience Type",
                  required: false,
                  visible: true,
                  range: ["Student", "Teacher", "Parent", "Administrator"],
                },
                {
                  code: "targetBoardIds",
                  visible: true,
                  depends: [],
                  editable: true,
                  dataType: "list",
                  sourceCategory: "board",
                  output: "identifier",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  description: "Board",
                  label: "Board/Syllabus of the audience",
                  required: true,
                  name: "Board/Syllabus",
                  inputType: "select",
                  placeholder: "Select Board/Syllabus",
                  validations: [
                    {
                      type: "required",
                      message: "Board is required",
                    },
                  ],
                },
                {
                  code: "targetMediumIds",
                  visible: true,
                  depends: ["targetBoardIds"],
                  editable: true,
                  dataType: "list",
                  sourceCategory: "medium",
                  output: "identifier",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  description: "",
                  label: "Medium(s) of the audience",
                  required: true,
                  name: "Medium",
                  inputType: "nestedselect",
                  placeholder: "Select Medium",
                  validations: [
                    {
                      type: "required",
                      message: "Medium is required",
                    },
                  ],
                },
                {
                  code: "targetGradeLevelIds",
                  visible: true,
                  depends: ["targetBoardIds", "targetMediumIds"],
                  editable: true,
                  dataType: "list",
                  sourceCategory: "gradeLevel",
                  output: "identifier",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  description: "Class",
                  label: "Class(es) of the audience",
                  required: true,
                  name: "Class",
                  inputType: "nestedselect",
                  placeholder: "Select Class",
                  validations: [
                    {
                      type: "required",
                      message: "Class is required",
                    },
                  ],
                },
                {
                  code: "targetSubjectIds",
                  visible: true,
                  depends: [
                    "targetBoardIds",
                    "targetMediumIds",
                    "targetGradeLevelIds",
                  ],
                  editable: true,
                  dataType: "list",
                  sourceCategory: "subject",
                  output: "identifier",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  description: "",
                  label: "Subject(s) of the audience",
                  required: true,
                  name: "Subject",
                  inputType: "nestedselect",
                  placeholder: "Select Subject",
                  validations: [
                    {
                      type: "required",
                      message: "Subject is required",
                    },
                  ],
                },
              ],
            },
            {
              name: "Sixth Section",
              fields: [
                {
                  code: "author",
                  dataType: "text",
                  description: "Author of the content",
                  editable: true,
                  inputType: "text",
                  label: "Author",
                  name: "Author",
                  placeholder: "Author",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  required: false,
                  visible: true,
                },
                {
                  code: "attributions",
                  dataType: "text",
                  description: "Attributions",
                  editable: true,
                  inputType: "text",
                  label: "Attributions",
                  name: "Attributions",
                  placeholder: "Attributions",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  required: false,
                  visible: true,
                },
                {
                  code: "copyright",
                  dataType: "text",
                  description: "Copyright",
                  editable: true,
                  inputType: "text",
                  label: "Copyright",
                  name: "Copyright & year",
                  placeholder: "Copyright",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  required: true,
                  visible: true,
                  validations: [
                    {
                      type: "required",
                      message: "Copyright is required",
                    },
                  ],
                },
                {
                  code: "copyrightYear",
                  dataType: "text",
                  description: "Year",
                  editable: true,
                  inputType: "text",
                  label: "Copyright Year",
                  name: "Copyright Year",
                  placeholder: "Copyright Year",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  required: true,
                  visible: true,
                  validations: [
                    {
                      type: "required",
                      message: "Copyright Year is required",
                    },
                  ],
                },
                {
                  code: "license",
                  dataType: "text",
                  description: "license",
                  editable: true,
                  inputType: "select",
                  label: "License",
                  name: "license",
                  placeholder: "Select License",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  required: true,
                  visible: true,
                  defaultValue: "CC BY 4.0",
                  validations: [
                    {
                      type: "required",
                      message: "License is required",
                    },
                  ],
                },
              ],
            },
          ],
        },
        delete: {},
        publish: {},
        review: {},
        search: {
          templateName: "",
          required: [],
          properties: [
            {
              code: "primaryCategory",
              dataType: "list",
              description: "Type",
              editable: true,
              default: [],
              renderingHints: {
                class: "sb-g-col-lg-1",
              },
              inputType: "nestedselect",
              label: "Content Type(s)",
              name: "Type",
              placeholder: "Select ContentType",
              required: false,
              visible: true,
            },
            {
              code: "board",
              visible: true,
              depends: [],
              editable: true,
              dataType: "list",
              renderingHints: {
                class: "sb-g-col-lg-1",
              },
              description: "Board",
              label: "Board",
              required: false,
              name: "Board",
              inputType: "select",
              placeholder: "Select Board",
              output: "name",
            },
            {
              code: "medium",
              visible: true,
              depends: ["board"],
              editable: true,
              dataType: "list",
              renderingHints: {
                class: "sb-g-col-lg-1",
              },
              description: "",
              label: "Medium(s)",
              required: false,
              name: "Medium",
              inputType: "nestedselect",
              placeholder: "Select Medium",
              output: "name",
            },
            {
              code: "gradeLevel",
              visible: true,
              depends: ["board", "medium"],
              editable: true,
              default: "",
              dataType: "list",
              renderingHints: {
                class: "sb-g-col-lg-1",
              },
              description: "Class",
              label: "Class(es)",
              required: false,
              name: "Class",
              inputType: "nestedselect",
              placeholder: "Select Class",
              output: "name",
            },
            {
              code: "subject",
              visible: true,
              depends: ["board", "medium", "gradeLevel"],
              editable: true,
              default: "",
              dataType: "list",
              renderingHints: {
                class: "sb-g-col-lg-1",
              },
              description: "",
              label: "Subject(s)",
              required: false,
              name: "Subject",
              inputType: "nestedselect",
              placeholder: "Select Subject",
              output: "name",
            },
            {
              code: "topic",
              visible: true,
              editable: true,
              dataType: "list",
              depends: ["board", "medium", "gradeLevel", "subject"],
              default: "",
              renderingHints: {
                class: "sb-g-col-lg-1",
              },
              name: "Topic",
              description: "Choose a Topics",
              inputType: "topicselector",
              label: "Topic(s)",
              placeholder: "Choose Topics",
              required: false,
            },
          ],
        },
        unitMetadata: {
          templateName: "",
          required: [],
          properties: [
            {
              name: "First Section",
              fields: [
                {
                  code: "name",
                  dataType: "text",
                  description: "Name of the content",
                  editable: true,
                  inputType: "text",
                  label: "Title",
                  name: "Title",
                  placeholder: "Title",
                  renderingHints: {
                    class: "sb-g-col-lg-1 required",
                  },
                  required: true,
                  visible: true,
                  validations: [
                    {
                      type: "max",
                      value: "120",
                      message: "Input is Exceeded",
                    },
                    {
                      type: "required",
                      message: "Title is required",
                    },
                  ],
                },
                {
                  code: "description",
                  dataType: "text",
                  description: "Description of the content",
                  editable: true,
                  inputType: "textarea",
                  label: "Description",
                  name: "Description",
                  placeholder: "Description",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  required: false,
                  visible: true,
                  validations: [
                    {
                      type: "max",
                      value: "256",
                      message: "Input is Exceeded",
                    },
                  ],
                },
                {
                  code: "keywords",
                  visible: true,
                  editable: true,
                  dataType: "list",
                  name: "Keywords",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  index: 3,
                  description: "Keywords for the content",
                  inputType: "keywords",
                  label: "Keywords",
                  placeholder: "Enter Keywords",
                  required: false,
                  validations: [],
                },
                {
                  code: "topic",
                  visible: true,
                  depends: [],
                  editable: true,
                  dataType: "list",
                  renderingHints: {},
                  name: "Topic",
                  description: "Choose a Topics",
                  index: 11,
                  inputType: "topicselector",
                  label: "Topics",
                  placeholder: "Choose Topics",
                  required: false,
                  validations: [],
                },
                {
                  code: "dialcodeRequired",
                  dataType: "text",
                  description: "QR CODE REQUIRED",
                  editable: true,
                  default: "No",
                  index: 5,
                  inputType: "radio",
                  label: "QR code required",
                  name: "dialcodeRequired",
                  placeholder: "QR code required",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  range: ["Yes", "No"],
                  required: false,
                  visible: true,
                },
                {
                  code: "dialcodes",
                  depends: ["dialcodeRequired"],
                  dataType: "list",
                  description: "Digital Infrastructure for Augmented Learning",
                  editable: true,
                  inputType: "dialcode",
                  label: "QR code",
                  name: "dialcode",
                  placeholder: "Enter code here",
                  renderingHints: {
                    class: "sb-g-col-lg-1",
                  },
                  required: true,
                  visible: true,
                  validations: [
                    {
                      type: "minLength",
                      value: "2",
                    },
                    {
                      type: "maxLength",
                      value: "20",
                    },
                  ],
                },
              ],
            },
          ],
        },
        update: {},
      },
    },
  },
};


export const SelectedNodeMockData = {
  data:{
  id: "do_1134346930267422721115",
  primaryCategory: "Multiselect Multiple Choice Question",
  objectType: "Question",
  metadata: {
    parent: "do_11343286128632627218",
    code: "7b3704d2-a85c-5c92-eb59-97adf0ea3c05",
    subject: ["English"],
    showRemarks: "No",
    channel: "01309282781705830427",
    language: ["English"],
    medium: ["English"],
    mimeType: "application/vnd.sunbird.question",
    templateId: "mcq-vertical",
    createdOn: "2021-12-20T05:12:56.116+0000",
    objectType: "Question",
    gradeLevel: ["Grade 2"],
    primaryCategory: "Multiselect Multiple Choice Question",
    contentDisposition: "inline",
    lastUpdatedOn: "2021-12-20T05:12:56.116+0000",
    contentEncoding: "gzip",
    showSolutions: "No",
    allowAnonymousAccess: "Yes",
    identifier: "do_1134346930267422721115",
    lastStatusChangedOn: "2021-12-20T05:12:56.116+0000",
    visibility: "Parent",
    showTimer: "No",
    author: "check1@yopmail.com",
    index: 1,
    qType: "MCQ",
    languageCode: ["en"],
    version: 1,
    versionKey: "1639977176118",
    showFeedback: "No",
    license: "CC BY 4.0",
    interactionTypes: ["choice"],
    framework: "nit_k-12",
    depth: 2,
    createdBy: "5a587cc1-e018-4859-a0a8-e842650b9d64",
    compatibilityLevel: 4,
    name: "Question 2",
    topic: ["Forest"],
    board: "CBSE",
    status: "Draft",
    showEvidence: "No",
  },
  root: false,
}
};

export const outcomeDeclarationData = {
  "questionset": {
    "identifier": "do_1134357224765685761203",
    "outcomeDeclaration": {
      levels: {
        L1: {
          label: 'Good',
        },
        L2: {
          label: 'Average',
        },
        L3: {
          label: 'Bad',
        },
      },
    },
    "languageCode": [
      "en"
    ]
  }
}

export const BranchingLogicData = {
  "do_113432866096922624110": {
    "target": [
      "do_113432866799935488112",
      "do_113432921842950144114"
    ],
    "preCondition": {},
    "source": []
  },
  "do_113432866799935488112": {
    "target": [],
    "source": [
      "do_113432866096922624110"
    ],
    "preCondition": {
      "and": [
        {
          "eq": [
            {
              "var": "do_113432866096922624110.response1.value",
              "type": "responseDeclaration"
            },
            [
              1
            ]
          ]
        }
      ]
    }
  },
  "do_113432921842950144114": {
    "target": [],
    "source": [
      "do_113432866096922624110"
    ],
    "preCondition": {
      "and": [
        {
          "eq": [
            {
              "var": "do_113432866096922624110.response1.value",
              "type": "responseDeclaration"
            },
            [
              1
            ]
          ]
        }
      ]
    }
  }
}

export const treeNodeData = {
  data: {
    "id": "do_113432866096922624110",
    "primaryCategory": "Multiselect Multiple Choice Question",
    "objectType": "Question",
    "metadata": {
      "parent": "do_11343286128632627218",
      "code": "50d43f69-851a-1256-43c4-89412d2966be",
      "subject": [
        "English"
      ],
      "showRemarks": "No",
      "channel": "01309282781705830427",
      "language": [
        "English"
      ],
      "medium": [
        "English"
      ],
      "mimeType": "application/vnd.sunbird.question",
      "templateId": "mcq-vertical",
      "createdOn": "2021-12-17T15:16:02.222+0000",
      "objectType": "Question",
      "gradeLevel": [
        "Grade 2"
      ],
      "primaryCategory": "Multiselect Multiple Choice Question",
      "contentDisposition": "inline",
      "lastUpdatedOn": "2021-12-17T17:09:05.878+0000",
      "contentEncoding": "gzip",
      "showSolutions": "No",
      "allowAnonymousAccess": "Yes",
      "identifier": "do_113432866096922624110",
      "lastStatusChangedOn": "2021-12-17T15:16:02.222+0000",
      "visibility": "Parent",
      "showTimer": "No",
      "author": "check1@yopmail.com",
      "index": 2,
      "qType": "MCQ",
      "languageCode": [
        "en"
      ],
      "version": 1,
      "versionKey": "1639760945887",
      "showFeedback": "No",
      "license": "CC BY 4.0",
      "interactionTypes": [
        "choice"
      ],
      "framework": "nit_k-12",
      "depth": 2,
      "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
      "compatibilityLevel": 4,
      "name": "Question 1",
      "topic": [
        "Forest"
      ],
      "board": "CBSE",
      "status": "Draft",
      "showEvidence": "No"
    },
    "root": false
  },
  parent: {
    "id": "do_1134460694911631361251",
    "primaryCategory": "Observation",
    "objectType": "QuestionSet",
    "metadata": {
      "parent": "do_11343286031200256013",
      "code": "27c2433b-ecbb-6e8e-4a59-a42b2f5ca2d5",
      "allowScoring": "No",
      "allowSkip": "Yes",
      "containsUserData": "No",
      "channel": "01309282781705830427",
      "language": [
        "English"
      ],
      "mimeType": "application/vnd.sunbird.questionset",
      "showHints": "No",
      "createdOn": "2022-01-05T06:58:24.683+0000",
      "objectType": "QuestionSet",
      "primaryCategory": "Observation",
      "contentDisposition": "inline",
      "lastUpdatedOn": "2022-01-05T06:58:24.683+0000",
      "contentEncoding": "gzip",
      "showSolutions": "No",
      "allowAnonymousAccess": "Yes",
      "identifier": "do_1134460694911631361251",
      "lastStatusChangedOn": "2022-01-05T06:58:24.683+0000",
      "requiresSubmit": "No",
      "visibility": "Parent",
      "showTimer": "No",
      "index": 4,
      "setType": "materialised",
      "languageCode": [
        "en"
      ],
      "version": 1,
      "versionKey": "1641365904683",
      "showFeedback": "No",
      "license": "CC BY 4.0",
      "depth": 1,
      "compatibilityLevel": 5,
      "name": "Section",
      "navigationMode": "non-linear",
      "allowBranching": "Yes",
      "shuffle": true,
      "attributions": [],
      "status": "Draft",
      "branchingLogic": {
        "do_113432866096922624110": {
          "target": [
            "do_113432866799935488112",
            "do_113432921842950144114"
          ],
          "preCondition": {},
          "source": []
        },
        "do_113432866799935488112": {
          "target": [],
          "source": [
            "do_113432866096922624110"
          ],
          "preCondition": {
            "and": [
              {
                "eq": [
                  {
                    "var": "do_113432866096922624110.response1.value",
                    "type": "responseDeclaration"
                  },
                  [
                    1
                  ]
                ]
              }
            ]
          }
        },
        "do_113432921842950144114": {
          "target": [],
          "source": [
            "do_113432866096922624110"
          ],
          "preCondition": {
            "and": [
              {
                "eq": [
                  {
                    "var": "do_113432866096922624110.response1.value",
                    "type": "responseDeclaration"
                  },
                  [
                    1
                  ]
                ]
              }
            ]
          }
        }
      },
      "allowMultipleInstances": null,
      "instances": null
    },
    "root": false
  }
}

export const rootNodeData={
  "organisationId": "937dd865-b256-4c1a-9830-a9b5b89f0913",
  "keywords": [
      "One"
  ],
  "subject": [
      "English"
  ],
  "channel": "01309282781705830427",
  "language": [
      "English"
  ],
  "mimeType": "application/vnd.sunbird.questionset",
  "showHints": "No",
  "objectType": "QuestionSet",
  "gradeLevel": [
      "Grade 2"
  ],
  "primaryCategory": "Observation",
  "children": [
      {
          "parent": "do_11343286031200256013",
          "code": "b45657f0-5888-6854-c7e8-d60d79a701f3",
          "allowScoring": "No",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "branchingLogic": {
              "do_1134468013653114881310": {
                  "target": [
                      "e232be0d-e998-8174-3122-e2c6279dc9f7",
                      "7dfa8f6e-7081-548b-5ee6-1b177078ec12"
                  ],
                  "preCondition": {},
                  "source": []
              },
              "e232be0d-e998-8174-3122-e2c6279dc9f7": {
                  "target": [],
                  "source": [
                      "do_1134468013653114881310"
                  ],
                  "preCondition": {
                      "and": [
                          {
                              "eq": [
                                  {
                                      "var": "do_1134468013653114881310.response1.value",
                                      "type": "responseDeclaration"
                                  },
                                  [
                                      0
                                  ]
                              ]
                          }
                      ]
                  }
              },
              "7dfa8f6e-7081-548b-5ee6-1b177078ec12": {
                  "target": [],
                  "source": [
                      "do_1134468013653114881310"
                  ],
                  "preCondition": {
                      "and": [
                          {
                              "eq": [
                                  {
                                      "var": "do_1134468013653114881310.response1.value",
                                      "type": "responseDeclaration"
                                  },
                                  [
                                      1
                                  ]
                              ]
                          }
                      ]
                  }
              }
          },
          "language": [
              "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2021-12-17T15:06:01.773+0000",
          "objectType": "QuestionSet",
          "allowMultipleInstances": "No",
          "primaryCategory": "Observation",
          "children": [
              {
                  "parent": "do_11343286117804441614",
                  "code": "05ef6d3b-7929-6606-6fe7-006e39875497",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "templateId": "mcq-vertical",
                  "createdOn": "2022-01-06T07:47:24.789+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Multiselect Multiple Choice Question",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T09:08:35.468+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468013653114881310",
                  "lastStatusChangedOn": "2022-01-06T07:47:24.789+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 1,
                  "qType": "MCQ",
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641460115474",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "choice"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "test",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286117804441614",
                  "code": "7dfa8f6e-7081-548b-5ee6-1b177078ec12",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-06T09:09:25.126+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Slider",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T09:09:25.125+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468416727121921322",
                  "lastStatusChangedOn": "2022-01-06T09:09:25.126+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 2,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641460165127",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "slider"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "child slider 2",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286117804441614",
                  "code": "e232be0d-e998-8174-3122-e2c6279dc9f7",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-06T09:01:50.561+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Slider",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T09:01:50.561+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468379489157121320",
                  "lastStatusChangedOn": "2022-01-06T09:01:50.562+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 3,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641459710566",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "slider"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "child slider",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286117804441614",
                  "code": "424f066e-c69a-a5c6-f733-d380ff24ae6b",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-06T07:47:47.570+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Slider",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T08:41:05.349+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468015519334401312",
                  "lastStatusChangedOn": "2022-01-06T07:47:47.570+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 4,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641458465355",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "slider"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "slider",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286117804441614",
                  "code": "37631b94-9797-66b1-d8bb-959cf8be6360",
                  "subject": [
                      "English"
                  ],
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-06T08:43:27.769+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Date",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T08:43:27.769+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468289148436481316",
                  "lastStatusChangedOn": "2022-01-06T08:43:27.769+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 5,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641458607849",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "date"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Date",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "level": 3
              },
              {
                  "parent": "do_11343286117804441614",
                  "code": "17b8f38d-d75f-c527-40cc-d5112fa73a02",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-06T08:44:10.212+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Text",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T08:44:10.212+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468292625367041318",
                  "lastStatusChangedOn": "2022-01-06T08:44:10.212+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 6,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641458650214",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "text"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Text",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-06T09:09:25.125+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_11343286117804441614",
          "lastStatusChangedOn": "2021-12-17T15:06:01.774+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 1,
          "setType": "materialised",
          "languageCode": [
              "en"
          ],
          "version": 1,
          "versionKey": "1639753561773",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Section 1",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft",
          "level": 2
      },
      {
          "parent": "do_11343286031200256013",
          "code": "a8cad110-dbb0-509d-054a-e7f5ce2a70b9",
          "allowScoring": "No",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "branchingLogic": {
              "do_1134468667041873921324": {
                  "target": [
                      "b74f8786-cc91-2c77-5313-e7ebe372d4ea"
                  ],
                  "preCondition": {},
                  "source": []
              },
              "b74f8786-cc91-2c77-5313-e7ebe372d4ea": {
                  "target": [],
                  "source": [
                      "do_1134468667041873921324"
                  ],
                  "preCondition": {
                      "and": [
                          {
                              "eq": [
                                  {
                                      "var": "do_1134468667041873921324.response1.value",
                                      "type": "responseDeclaration"
                                  },
                                  [
                                      0
                                  ]
                              ]
                          }
                      ]
                  }
              }
          },
          "language": [
              "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2021-12-17T15:06:08.993+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation",
          "children": [
              {
                  "parent": "do_11343286123719065616",
                  "code": "911c0d3a-8e33-4e4e-2ebf-dc6cb7b5a8ca",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "templateId": "mcq-vertical",
                  "createdOn": "2022-01-06T10:00:20.726+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Multiselect Multiple Choice Question",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T10:00:44.188+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468667041873921324",
                  "lastStatusChangedOn": "2022-01-06T10:00:20.726+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 1,
                  "qType": "MCQ",
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641463244196",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "choice"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "MCQ Question",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286123719065616",
                  "code": "b74f8786-cc91-2c77-5313-e7ebe372d4ea",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-06T10:01:45.147+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Slider",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-06T10:01:45.147+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134468673957642241326",
                  "lastStatusChangedOn": "2022-01-06T10:01:45.147+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 2,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1641463305148",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "slider"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "child Slider",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-06T10:01:45.148+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_11343286123719065616",
          "lastStatusChangedOn": "2021-12-17T15:06:08.993+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 2,
          "setType": "materialised",
          "languageCode": [
              "en"
          ],
          "version": 1,
          "versionKey": "1639753568993",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Section 2",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft",
          "level": 2
      },
      {
          "parent": "do_11343286031200256013",
          "code": "7d0efbb3-56a0-5d63-5d9a-54602cc0e489",
          "allowScoring": "No",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "branchingLogic": {
              "do_113432866096922624110": {
                  "target": [
                      "do_113432866799935488112",
                      "do_113432921842950144114"
                  ],
                  "preCondition": {},
                  "source": []
              },
              "do_113432866799935488112": {
                  "target": [],
                  "source": [
                      "do_113432866096922624110"
                  ],
                  "preCondition": {
                      "and": [
                          {
                              "eq": [
                                  {
                                      "var": "do_113432866096922624110.response1.value",
                                      "type": "responseDeclaration"
                                  },
                                  [
                                      1
                                  ]
                              ]
                          }
                      ]
                  }
              },
              "do_113432921842950144114": {
                  "target": [],
                  "source": [
                      "do_113432866096922624110"
                  ],
                  "preCondition": {
                      "and": [
                          {
                              "eq": [
                                  {
                                      "var": "do_113432866096922624110.response1.value",
                                      "type": "responseDeclaration"
                                  },
                                  [
                                      1
                                  ]
                              ]
                          }
                      ]
                  }
              }
          },
          "language": [
              "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2021-12-17T15:06:14.991+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation",
          "children": [
              {
                  "parent": "do_11343286128632627218",
                  "code": "7b3704d2-a85c-5c92-eb59-97adf0ea3c05",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "templateId": "mcq-vertical",
                  "createdOn": "2021-12-20T05:12:56.116+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Multiselect Multiple Choice Question",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2021-12-20T05:12:56.116+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_1134346930267422721115",
                  "lastStatusChangedOn": "2021-12-20T05:12:56.116+0000",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 1,
                  "qType": "MCQ",
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1639977176118",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "choice"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Question 2",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286128632627218",
                  "code": "50d43f69-851a-1256-43c4-89412d2966be",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "templateId": "mcq-vertical",
                  "createdOn": "2021-12-17T15:16:02.222+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Multiselect Multiple Choice Question",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2021-12-17T17:09:05.878+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_113432866096922624110",
                  "lastStatusChangedOn": "2021-12-17T15:16:02.222+0000",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 2,
                  "qType": "MCQ",
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1639760945887",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "choice"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Question 1",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286128632627218",
                  "code": "cff29d49-4fee-e1db-ec18-38ad51d1d88a",
                  "subject": [
                      "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2021-12-17T15:17:28.039+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Slider",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2021-12-17T15:17:28.039+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_113432866799935488112",
                  "lastStatusChangedOn": "2021-12-17T15:17:28.040+0000",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 3,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1639754248146",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "slider"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Dep Question 1",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No",
                  "level": 3
              },
              {
                  "parent": "do_11343286128632627218",
                  "code": "a73d1022-b7ee-7ec6-7125-51937a69e5c3",
                  "subject": [
                      "English"
                  ],
                  "channel": "01309282781705830427",
                  "language": [
                      "English"
                  ],
                  "medium": [
                      "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2021-12-17T17:09:27.157+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                      "Grade 2"
                  ],
                  "primaryCategory": "Date",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2021-12-17T17:09:27.157+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_113432921842950144114",
                  "lastStatusChangedOn": "2021-12-17T17:09:27.157+0000",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 4,
                  "languageCode": [
                      "en"
                  ],
                  "version": 1,
                  "versionKey": "1639760967159",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                      "date"
                  ],
                  "framework": "nit_k-12",
                  "depth": 2,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Dep Question 2",
                  "topic": [
                      "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "level": 3
              }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-06T07:37:24.226+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_11343286128632627218",
          "lastStatusChangedOn": "2021-12-17T15:06:14.991+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 3,
          "setType": "materialised",
          "languageCode": [
              "en"
          ],
          "version": 1,
          "versionKey": "1639753574991",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Section 3",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft",
          "level": 2
      },
      {
          "parent": "do_11343286031200256013",
          "code": "27c2433b-ecbb-6e8e-4a59-a42b2f5ca2d5",
          "allowScoring": "No",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
              "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T06:58:24.683+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-05T06:58:24.683+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460694911631361251",
          "lastStatusChangedOn": "2022-01-05T06:58:24.683+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 4,
          "setType": "materialised",
          "languageCode": [
              "en"
          ],
          "version": 1,
          "versionKey": "1641365904683",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Section",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft",
          "level": 2
      },
      {
          "parent": "do_11343286031200256013",
          "code": "3806ef40-1363-7845-bd98-8d229c55c672",
          "allowScoring": "No",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
              "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T06:58:24.684+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-05T06:58:24.684+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460694911713281253",
          "lastStatusChangedOn": "2022-01-05T06:58:24.684+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 5,
          "setType": "materialised",
          "languageCode": [
              "en"
          ],
          "version": 1,
          "versionKey": "1641365904684",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Section",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft",
          "level": 2
      }
  ],
  "contentEncoding": "gzip",
  "showSolutions": "No",
  "identifier": "do_11343286031200256013",
  "visibility": "Default",
  "showTimer": "No",
  "author": "check1@yopmail.com",
  "entityType": "Block",
  "consumerId": "028d6fb1-2d6f-4331-86aa-f7cf491a41e0",
  "childNodes": [
      "do_1134460694911631361251",
      "do_1134468667041873921324",
      "do_11343286123719065616",
      "do_1134468673957642241326",
      "do_1134468289148436481316",
      "do_11343286117804441614",
      "do_1134468379489157121320",
      "do_1134468292625367041318",
      "do_1134468015519334401312",
      "do_1134468416727121921322",
      "do_1134468013653114881310",
      "do_1134460694911713281253",
      "do_1134346930267422721115",
      "do_11343286128632627218",
      "do_113432866096922624110",
      "do_113432866799935488112",
      "do_113432921842950144114"
  ],
  "maxScore": 11,
  "languageCode": [
      "en"
  ],
  "version": 1,
  "license": "CC BY 4.0",
  "name": "Observation without rubrics",
  "allowBranching": "No",
  "status": "Draft",
  "code": "a72205fc-acba-d622-0f1a-38e1a465a9d6",
  "allowScoring": "Yes",
  "allowSkip": "Yes",
  "containsUserData": "No",
  "description": "Some description goes here",
  "medium": [
      "English"
  ],
  "createdOn": "2021-12-17T15:04:16.056+0000",
  "contentDisposition": "inline",
  "lastUpdatedOn": "2022-01-06T10:01:45.194+0000",
  "allowAnonymousAccess": "Yes",
  "lastStatusChangedOn": "2021-12-17T15:04:16.056+0000",
  "creator": "check1@yopmail.com",
  "requiresSubmit": "No",
  "setType": "materialised",
  "versionKey": "1641463305194",
  "showFeedback": "No",
  "framework": "nit_k-12",
  "depth": 0,
  "createdBy": "4e397c42-495e-4fdb-8558-f98176230916",
  "compatibilityLevel": 5,
  "navigationMode": "non-linear",
  "shuffle": true,
  "board": "CBSE",
  "programId": "1a4d0130-1a9b-11ec-8655-6320ba8843b0",
  "instructions": "",
  "level": 1,
  "timeLimits": {}
}