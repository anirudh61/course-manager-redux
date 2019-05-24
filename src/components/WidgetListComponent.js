import React from 'react'
import HeadingWidget from "./HeadingWidget"
import ListWidget from "./ListWidget"
import ParagraphWidget from "./ParagraphWidget"
import ImageWidget from "./ImageWidget"
import LinkWidget from "./LinkWidget"

const WidgetListComponent = ({id, updateWidget, deleteWidget, moveWidgetUp, moveWidgetDown, preview,  widget}) =>
    <div>

        <div>

            {
                widget.type=='HEADING' &&
                <HeadingWidget
                    key={id}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    moveWidgetUp={moveWidgetUp}
                    moveWidgetDown={moveWidgetDown}
                    preview={preview}
                /> ||

                widget.type=='LIST' &&
                <ListWidget
                    key={id}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    moveWidgetUp={moveWidgetUp}
                    moveWidgetDown={moveWidgetDown}
                    preview={preview}
                /> ||

                widget.type=='PARAGRAPH' &&
                <ParagraphWidget
                    key={id}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    moveWidgetUp={moveWidgetUp}
                    moveWidgetDown={moveWidgetDown}
                    preview={preview}
                /> ||

                widget.type=='IMAGE' &&
                <ImageWidget
                    key={id}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    moveWidgetUp={moveWidgetUp}
                    moveWidgetDown={moveWidgetDown}
                    preview={preview}
                /> ||

                widget.type=='LINK' &&
                <LinkWidget
                    key={id}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    moveWidgetUp={moveWidgetUp}
                    moveWidgetDown={moveWidgetDown}
                    preview={preview}/>
            }
        </div>

    </div>

export default WidgetListComponent