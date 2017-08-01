/*
 # alarms app
    alarm {
        time: minutes (rendered as hours and minutes)
        enabled: boolean
        name: string
        repeat: array: string
        type: alarm
    }
    items = query all docs type == alarm, ordered by time
vbox
    hbox
        push_button: insert new alarm
    scroll listview: items
        template(item)
            check_button <= item.enabled
            label: item.title
            label: floor(item.time/60) + item mod 60
            label: repeatToString(item.repeat)
*/


import React, {Component} from "react"
import {VBox, HBox, PushButton, CheckButton, ListView, Scroll} from "./GUIUtils";
import {DB} from "./Database";

let AlarmTemplate = ((props) => {
    var item = props.item;
    return <HBox>
        <CheckButton/>
        <label>{item.title}</label>
        <label>{Math.floor(item.time/60)+ ':' + item.time % 60}</label>
        <label>{item.repeat.join("")}</label>
    </HBox>
});

export default class Alarms extends Component {
    constructor(props) {
        super(props);
        this.query = DB.makeLiveQuery({type:'alarm'}, {order:{time:true}});
        console.log("the query is", this.query);
        this.createAlarm = () => {
            var alarm = {
                type:'alarm',
                time: 60*6,
                enabled: true,
                name: 'unnamed alarm',
                repeat: ['none']
            };
            DB.insert(alarm);
        }
    }
    render() {
        return <VBox>
            <HBox>
                <PushButton onClick={this.createAlarm} className="fa fa-plus">+</PushButton>
            </HBox>
            <Scroll>
                <ListView model={this.query} template={AlarmTemplate}/>
            </Scroll>
        </VBox>
    }
}

