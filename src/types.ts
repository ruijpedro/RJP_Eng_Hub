export type EngApp='smartstruct'|'rjp3d'
export interface ProjectFile{id:string;name:string;kind:'ifc'|'pdf'|'dwg'|'dwf'|'report'|'other';app?:EngApp;version?:string;updatedAt:string;note?:string}
export interface EngProject{schema:'RJP-ENG-PROJECT/1.0';id:string;name:string;client:string;location:string;type:string;solution:'traditional'|'lsf'|'timber'|'other';createdAt:string;updatedAt:string;activeIfc?:string;files:ProjectFile[];folders:string[]}
export interface HubSettings{smartStructUrl:string;rjp3dUrl:string;driveRootName:string;driveRootId:string;driveRootUrl:string}
