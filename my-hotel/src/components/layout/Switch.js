import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Reserve } from "../reserve/Reserve";
import { Contact } from "../contact/Contact";
import { Browse } from "../browse/Browse";
import { LogIn } from "../admin/LogIn";
import { Admin } from "../admin/Admin";
import { Properties } from "../browse/Properties";
import { AddProperty } from "../admin/AddProperty";

function Switcher() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/properties/:id" component={Properties} />
            <Route path="/reserve" component={Reserve} />
            <Route path="/contact" component={Contact} />
            <Route path="/browse" component={Browse} />
            <Route path="/login" component={LogIn} />
            <Route path="/admin" component={Admin} />
            <Route path="/addproperty" component={AddProperty} />
        </Switch>
    )
}

export default Switcher
