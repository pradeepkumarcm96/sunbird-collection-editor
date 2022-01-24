import { EditorService } from './../../services/editor/editor.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FancyTreeComponent } from './fancy-tree.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { TelemetryInteractDirective } from '../../directives/telemetry-interact/telemetry-interact.directive';
import { EditorTelemetryService } from '../../services/telemetry/telemetry.service';
import { config, treeData, tree, editorConfig, TargetNodeMockData,
  CurrentNodeMockData, mockTreeService, mockData, observationWithRubricsMockData } from './fancy-tree.component.spec.data';
import { Router } from '@angular/router';
import { TreeService } from '../../services/tree/tree.service';
import { ToasterService } from '../../services/toaster/toaster.service';
import { ConfigService } from '../../services/config/config.service';
import { SuiModule } from 'ng2-semantic-ui-v9';
import { HelperService } from 'collection-editor-library/lib/services/helper/helper.service';
import { BranchingLogic } from '../question/question.component.spec.data';
describe('FancyTreeComponent', () => {
  let component: FancyTreeComponent;
  let fixture: ComponentFixture<FancyTreeComponent>;
  let editorService,helperService;
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [EditorTelemetryService, EditorService,
          { provide: Router, useClass: RouterStub }, ToasterService,
          { provide: ConfigService, useValue: config },
          { provide: TreeService, useValue: mockTreeService },
          { provide: ChangeDetectorRef, useValue: { detectChanges: () => {} } }
        ],
      imports: [HttpClientTestingModule, SuiModule],
      declarations: [ FancyTreeComponent, TelemetryInteractDirective ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyTreeComponent);
    editorService = TestBed.get(EditorService);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit() should call #initialize()', () => {
    const editorService = TestBed.get(EditorService);
    component.nodes = {
      data: treeData
    };
    spyOnProperty(editorService, 'editorConfig', 'get').and.returnValue(editorConfig);
    spyOn(component, 'initialize');
    component.ngOnInit();
    expect(component.initialize).toHaveBeenCalled();
  });

  it('#initialize() should call #buildTree()', () => {
    component.nodes = {
      data: treeData
    };
    spyOn(component, 'buildTree');
    component.initialize();
    expect(component.buildTree).toHaveBeenCalled();
  });

  it('#initialize() should call #buildTreeFromFramework()', () => {
    component.nodes = {
      data:{
        children:[]
      }
    };
    editorConfig.config['renderTaxonomy']=true;
    spyOnProperty(editorService, 'editorConfig', 'get').and.returnValue(editorConfig);
    spyOn(component, 'buildTreeFromFramework');
    component.buildTreeFromFramework(observationWithRubricsMockData.data.children);
    expect(component.buildTreeFromFramework).toHaveBeenCalledWith(observationWithRubricsMockData.data.children)
  });

  it('#addFromLibrary() should call #emitshowLibraryPageEvent()', () => {
    const editorService: EditorService = TestBed.get(EditorService);
    spyOn(editorService, 'emitshowLibraryPageEvent').and.returnValue('showLibraryPage');
    component.addFromLibrary();
    expect(editorService.emitshowLibraryPageEvent).toHaveBeenCalledWith('showLibraryPage');
  });

  it('#ngAfterViewInit() should call #getTreeConfig() and #renderTree()', () => {
    spyOn(component, 'getTreeConfig');
    spyOn(component, 'renderTree');
    component.ngAfterViewInit();
    expect(component.getTreeConfig).toHaveBeenCalled();
    expect(component.renderTree).toHaveBeenCalled();
  });

  it('call #eachNodeActionButton() to verify #visibility for root node', () => {
    component.config = mockData.config;
    const rootNode = {
      getLevel: () => 1,
      folder: true,
      data: { root: true },
    };
    component.eachNodeActionButton(rootNode);
    expect(component.visibility.addFromLibrary).toBeFalsy();
    expect(component.visibility.createNew).toBeFalsy();
    expect(component.visibility.addChild).toBeTruthy();
    expect(component.visibility.addSibling).toBeFalsy();
  });

  it('call #eachNodeActionButton() to verify #visibility for child node', () => {
    component.config = mockData.config;
    const node = {
      getLevel: () => 2,
      folder: true,
      data: { root: false },
    };
    component.eachNodeActionButton(node);
    expect(component.visibility.addChild).toBeTruthy();
    expect(component.visibility.addSibling).toBeTruthy();
    expect(component.visibility.addFromLibrary).toBeFalsy();
    expect(component.visibility.createNew).toBeFalsy();
  });

  it('call #eachNodeActionButton() to verify #visibility for leaf node', () => {
    component.config = mockData.config;
    const node = {
      getLevel: () => 3,
      folder: true,
      data: { root: false },
    };
    component.eachNodeActionButton(node);
    expect(component.visibility.addChild).toBeFalsy();
    expect(component.visibility.addSibling).toBeTruthy();
    expect(component.visibility.addFromLibrary).toBeFalsy();
    expect(component.visibility.createNew).toBeFalsy();
  });

  it('call #eachNodeActionButton() to verify #visibility when #bulkUploadProcessingStatus is true', () => {
    component.config = mockData.config;
    component.bulkUploadProcessingStatus = true;
    const node = {
      getLevel: () => 2,
      folder: true,
      data: { root: false },
    };
    component.eachNodeActionButton(node);
    expect(component.visibility).toEqual({
      addChild: false,
      addSibling: false,
      addFromLibrary: false,
      createNew: false
    });
  });

  it('#addFromLibrary() should call #emitshowLibraryPageEvent()', () => {
    const editorService: EditorService = TestBed.get(EditorService);
    spyOn(editorService, 'emitshowLibraryPageEvent');
    component.addFromLibrary();
    expect(editorService.emitshowLibraryPageEvent).toHaveBeenCalled();
  });

  it('#handleActionButtons() should call #removeNode() if action is delete', () => {
    const el = {id: 'delete'};
    spyOn(component, 'removeNode');
    component.handleActionButtons(el);
    expect(component.removeNode).toHaveBeenCalled();
  });

  it('#handleActionButtons() should call #addSibling() if action is addsibling', () => {
    const el = {id: 'addsibling'};
    spyOn(component, 'addSibling');
    component.handleActionButtons(el);
    expect(component.addSibling).toHaveBeenCalled();
  });

  it('#handleActionButtons() should call #addChild() if action is addchild', () => {
    const el = {id: 'addchild'};
    spyOn(component, 'addChild');
    component.handleActionButtons(el);
    expect(component.addChild).toHaveBeenCalled();
  });

  it('#createNewContent() should emit event', () => {
    spyOn(component.treeEventEmitter, 'emit');
    component.createNewContent();
    expect(component.treeEventEmitter.emit).toHaveBeenCalled();
  });

  it('#isFolder() should return false if config.objectType = QuestionSet and child.objectType = Question', () => {
    component.config = {
      objectType: 'QuestionSet'
    };
    const child = {
      objectType: 'Question'
    };

    const result = component.isFolder(child);
    expect(result).toEqual(false);
  });

  it('#isFolder() should return true if child.visibility = Parent', () => {
    component.config = {
      objectType: 'QuestionSet'
    };
    const child = {
      objectType: '',
      visibility: 'Parent'
    };

    const result = component.isFolder(child);
    expect(result).toEqual(true);
  });

  it('#isFolder() should return false if child.visibility != Parent', () => {
    component.config = {
      objectType: 'QuestionSet'
    };
    const child = {
      objectType: '',
      visibility: 'Child'
    };

    const result = component.isFolder(child);
    expect(result).toEqual(false);
  });

  it('#isContent() should return true if config.objectType = QuestionSet and child.objectType = Question', () => {
    component.config = {
      objectType: 'QuestionSet'
    };
    const child = {
      objectType: 'Question'
    };
    const result = component.isContent(child);
    expect(result).toEqual(true);
  });

  it('#getIconClass() should return class = fa fa-file-o', () => {
    component.config = {
      objectType: 'QuestionSet'
    };
    const child = {
      objectType: 'Question'
    };

    const result = component.getIconClass(child, 1);
    expect(result).toEqual('fa fa-file-o');
  });

  it('#getIconClass() should return class = fa fa-folder-o', () => {
    component.config = {
      objectType: 'QuestionSet'
    };
    const child = {
      objectType: '',
      visibility: 'Parent'
    };

    const result = component.getIconClass(child, 1);
    expect(result).toEqual('fa fa-folder-o');
  });

  it('#getIconClass() should return class = fa fa-file-o', () => {
    component.config = {
      objectType: 'QuestionSet'
    };
    const child = {
      objectType: '',
      visibility: ''
    };

    const result = component.getIconClass(child, 1);
    expect(result).toEqual('fa fa-file-o');
  });

  it('#dragDrop() should call #dropNotAllowed()', () => {
    const data = {
      hitMode: 'before',
      node: {
          data: {
            root: true
          },
      }
    };
    spyOn(component, 'dropNotAllowed');
    const node = {};
    component.dragDrop(node, data);
    expect(component.dropNotAllowed).toHaveBeenCalled();
  });

  it('#dragDrop() should call #dropNode()', () => {
    const data = {
      node: {
          data: {
            root: true
          },
      }
    };
    component.config = {
      maxDepth: 2
    };
    spyOn(component, 'dropNode').and.callFake(() => {
      return true;
    });
    const node = {};
    component.dragDrop(node, data);
    expect(component.dropNode).toHaveBeenCalled();
  });

  it('#dropNotAllowed() should return false', () => {
    const result = component.dropNotAllowed();
    expect(result).toBeFalsy();
  });

  it('#buildTree() should return tree objects', () => {
    const result = component.buildTree(treeData, tree, 2);
    expect(result.length).toBeGreaterThan(1);
  });

  it ('#checkContentAddition() should check node hitMode', () => {
    component.config = editorConfig;
    const targetNode = { folder: false, getLevel: () => 2 };
    let contentNode: any = { hitMode: 'before', otherNode : { data: { metadata: { primaryCategory: 'eTextbook'}}}};
    const result = component.checkContentAddition(targetNode, contentNode);
    expect(result).toBeTruthy();
    contentNode =  { hitMode: 'over' };
    const result1 = component.checkContentAddition(targetNode, contentNode);
    expect(result1).toBeFalsy();
  });

  it ('#checkContentAddition() should check contentType while rearrange resources', () => {
    component.config = editorConfig.config;
    const targetNode = { folder: true, getLevel: () => 3 };
    const contentNode: any = { hitMode: 'before', otherNode : { data: { metadata: { primaryCategory: 'eTextbook'}}}};
    const result = component.checkContentAddition(targetNode, contentNode);
    expect(result).toBeTruthy();
  });

  it ('#dropNotAllowed() should throw warning message', () => {
    const toasterService = TestBed.inject(ToasterService);
    spyOn(toasterService, 'warning').and.callThrough();
    const result = component.dropNotAllowed();
    expect(result).toBeFalsy();
    expect(toasterService.warning).toHaveBeenCalled();
  });

  it ('#dragDrop() should throw warning message when root node', () => {
    const toasterService = TestBed.inject(ToasterService);
    spyOn(toasterService, 'warning').and.callThrough();
    const targetNode = { folder: false, getLevel: () => 2 };
    const contentNode: any = { hitMode: 'before', node: { data: { root: true } }};
    const result = component.dragDrop(targetNode, contentNode);
    expect(result).toBeFalsy();
    expect(toasterService.warning).toHaveBeenCalled();
  });

  it ('#dragDrop() should drag node when maxDepth not empty', () => {
    component.config =  editorConfig.config;
    const targetNode = { folder: false, getLevel: () => 2 };
    spyOn(component, 'dropNode').and.callFake(() => {
      return true;
    });
    const contentNode: any = { hitMode: 'before', node: { data: { root: false } }};
    const result = component.dragDrop(targetNode, contentNode);
    expect(result).toBeTruthy();
  });

  it ('#dropNode() should drop node', () => {
    component.config =  editorConfig.config;
    spyOn(component, 'dropNode').and.callFake(() => {
      return true;
    });
    const targetNode = { folder: false, getLevel: () => 2 };
    const contentNode: any = { hitMode: 'after', otherNode: { data:{id:"do_11330103476396851218"},getLevel: () => 1, moveTo: () => true }, node: { data: { root: false } }};
    component.dropNode(targetNode, contentNode);
    const result = component.dragDrop(targetNode, contentNode);

    spyOn(editorService, 'getDependentNodes').and.returnValue({
      "source": [],
      "target": [
          "do_1134347722012835841130",
          "do_1134355563320688641163"
      ]
  });
    expect(result).toBeTruthy();
  });

  it("#rearrangeBranchingLogic on the node drag and drop on tree structure",()=>{
    const currentSectionId='do_1134355577791283201172';
    const nodeId ='do_1134347235008512001125';
    const targetSectionId='do_1134347209749299201119';
    const dependentNodeIDs ={
      "source": [],
      "target": [
          "do_1134347722012835841130",
          "do_1134355563320688641163"
      ]
  };
    const movingNodeIds= ['do_1134347722012835841130', 'do_1134355563320688641163', 'do_1134347235008512001125'];
    spyOn(component,"rearrangeBranchingLogic").and.callThrough();
    component.rearrangeBranchingLogic(nodeId, currentSectionId, targetSectionId, dependentNodeIDs, movingNodeIds);
    expect(component.rearrangeBranchingLogic).toHaveBeenCalled();

  })

  it("#moveDependentNodes on the node drag and drop on tree structure",()=>{
    spyOn(component,'moveDependentNodes').and.callThrough();
    component.moveDependentNodes(TargetNodeMockData,CurrentNodeMockData);
    expect(component.moveDependentNodes).toHaveBeenCalled();
  });

  it('#rearrangeBranchingLogic() should call when drag and drop with branchingLogic is there ', () => {
    const nodeId = "do_113449672558780416163";
    const currentSectionId = "do_1134460323602841601200";
    const targetSectionId = "do_1134460323604971521236";
    const movingNodeIds=[
     "do_113449672558780416163",
     "do_113449775832088576181",
     "do_113449787008081920183",
     "do_113449808985628672185",
     "do_11345671149997260811"
    ];
    const dependentNodeIDs = {
      source: [],
      target: [
        "do_113449775832088576181",
        "do_113449787008081920183",
        "do_113449808985628672185",
        "do_11345671149997260811"
      ]
    }
    spyOn(component,'rearrangeBranchingLogic').and.callThrough();
    component.rearrangeBranchingLogic(nodeId,currentSectionId,targetSectionId,dependentNodeIDs,movingNodeIds);
    expect(component.rearrangeBranchingLogic).toHaveBeenCalled();
  });

});