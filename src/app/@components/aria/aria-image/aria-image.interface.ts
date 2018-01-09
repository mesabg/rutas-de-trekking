//-- Interface description

export interface AriaImageItem {
    index:number;
    name:string;
    url:string;
    slug:string;
};

export interface AriaImageExport {
    $target:any;
    data:AriaImageItem;
};