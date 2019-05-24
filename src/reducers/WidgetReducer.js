import React from 'react'

const WidgetReducer = (state, action) => {
    switch(action.type) {

        case 'SET_PREVIEW':
            console.log(state.preview)
            return {
                preview: !(state.preview),
                widgets: state.widgets
            }

            console.log(state.preview)

        case 'GET_WIDGETS_FOR_TOPIC':
            return {
                widgets: action.widgets,
                preview: action.preview
            }

        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        case 'ADD_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        text: 'New Widget',
                        size: 1
                    }
                ]
            }

        case 'MOVE_UP':

            if (state.widgets.indexOf(action.widget) > 0) {
                let index = state.widgets.indexOf(action.widget)
                let temp = state.widgets[index]

                state.widgets[index] = state.widgets[index - 1]
                state.widgets[index - 1] = temp

            }
            return {
                widgets: [...state.widgets]
            }

        case 'MOVE_DOWN':

            if (state.widgets.indexOf(action.widget) < state.widgets.length) {
                let index = state.widgets.indexOf(action.widget)
                let temp = state.widgets[index]

                state.widgets[index] = state.widgets[index + 1]
                state.widgets[index + 1] = temp

            }
            return {
                widgets: [...state.widgets]
            }

        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }

        default:
            return state;
    }
}

Array.prototype.move
    = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};


export default WidgetReducer
