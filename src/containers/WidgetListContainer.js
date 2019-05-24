import React from 'react'
import {connect} from 'react-redux'
import WidgetList from "../components/WidgetList"

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})

const dispatchToPropertyMapper = dispatch => ({

    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),

    moveWidgetUp: widget =>
        dispatch({
            type: 'MOVE_UP',
            widget: widget
        }),

    moveWidgetDown : widget =>
        dispatch({
            type: 'MOVE_DOWN',
            widget: widget
        }),

    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),

    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

    setPreview: () =>
        dispatch({
            type: 'SET_PREVIEW'
        })

})

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList)

export default WidgetListContainer