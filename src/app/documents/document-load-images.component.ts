import { Component, OnInit } from '@angular/core';
import { IPermissionForUser } from '../permission-for-user';
import { PermissionService } from '../permission.service';
import { IPermissionsForUserResult } from '../permissions-for-user-result';
import { IFunctionalArea } from '../functional-area';
import { IDocumentType } from '../document-type';

@Component({
  selector: 'di-document-load-images',
  templateUrl: './document-load-images.component.html',
  styleUrls: ['./document-load-images.component.css']
})
export class DocumentLoadImagesComponent implements OnInit {

  functionalAreas: IFunctionalArea[] = [];
  documentTypes: IDocumentType[] = [];
  selectedFunctionalAreaId: string;
  selectedDocumentTypeId: string;

  permissionsForUserResult: IPermissionsForUserResult;
  permissionsForUser: IPermissionForUser[];
  errorMessage: string = "";

  constructor(private permissionsService: PermissionService) { }

  ngOnInit() {
    this.permissionsService.getPermissionsByUserId(1942).subscribe({
      next: serviceResult => {
          this.permissionsForUserResult = serviceResult;
          this.permissionsForUser = serviceResult.results;
          this.functionalAreas = this.getUniqueFunctionalAreas(this.permissionsForUser);
          this.selectedFunctionalAreaId = "0";
          this.selectedDocumentTypeId = "0";
          this.documentTypes = [];
      },
      error: err => this.errorMessage = err
    });

  }

  getUniqueFunctionalAreas(permissions: IPermissionForUser[]) : IFunctionalArea[] {
    var functionalAreas: IFunctionalArea[] = [];
    permissions.forEach(function(permission) {
      if (!functionalAreas.some( ({id}) => id == permission.functionalArea.id)) {
        functionalAreas.push(permission.functionalArea);
      }
    });
    return functionalAreas;
  }

  onFunctionalAreaIdChange(functionalAreaId) {
    this.documentTypes = this.getUniqueDocumentTypesByFunctionalAreaId(this.permissionsForUser, functionalAreaId);;
  }

  getUniqueDocumentTypesByFunctionalAreaId(permissions: IPermissionForUser[], functionalAreaId: string) : IDocumentType[] {
    var documentTypes: IDocumentType[] = [];
    permissions.forEach(function(permission) {
      if (permission.functionalArea.id == functionalAreaId) {
        if (!documentTypes.some( ({id}) => id == permission.documentType.id)) {
          documentTypes.push(permission.documentType);
        }
      }
    });
    return documentTypes;
  }

}