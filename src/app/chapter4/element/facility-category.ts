
import {Serialize, SerializeMetaKey} from "./decorator";
import "reflect-metadata";
import {ConfigElement} from "./config-element";

//设施类别
export class FacilityCategory extends ConfigElement{

    static getClassName(): string {
        return "FacilityCategory";
    }

    constructor() {
        super();
    }

}
