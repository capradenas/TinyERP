import {IModule, Module, MenuItem} from "../../../../common/models/layout";
import {AuthenticationMode} from "../../../../common/enum";

import {CreateRequest} from "../../request/createRequest";
import {Requests} from "../../request/requests";
import {CreateRequestConfirmation} from "../../request/createRequestConfirmation";
import {ViewRequest} from "../../request/viewRequest";
import route from "./route";

let module: IModule = createModule();
export default module;
function createModule() {
    let module = new Module("app/modules/support", "support");
    module.menus.push(
        new MenuItem(
            "Support", route.support.requests.name, "fa fa-cogs",
            new MenuItem("Request", route.support.requests.name, "")
        )
    );
    module.addRoutes([
        { path: route.support.createRequest.path, name:  route.support.createRequest.name, component: CreateRequest, data: { authentication: AuthenticationMode.None }},
        { path: route.support.createRequestConfirmation.path, name:  route.support.createRequestConfirmation.name, component: CreateRequestConfirmation, data: { authentication: AuthenticationMode.None }},
        { path: route.support.requests.path, name:  route.support.requests.name, component: Requests, data: { authentication: AuthenticationMode.Require }},
        { path: route.support.viewRequest.path, name:  route.support.viewRequest.name, component: ViewRequest, data: { authentication: AuthenticationMode.Require }},
    ]);
    return module;
}