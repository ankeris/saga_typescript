import React, { FunctionComponent, useCallback } from "react";
import { reduxForm, Field, InjectedFormProps, } from "redux-form";

interface IProps {
    exposeValues: (vals: CreateCommentFormData) => void
}
type CreateCommentFormData = {
    nickName: string;
    commentBodyText: string;
}

const CommentForm: FunctionComponent<IProps & InjectedFormProps<{}, IProps>> = (props) => {
    const exposeValues = useCallback((vals) => {
        const valsToExpose: CreateCommentFormData = vals;
        props.exposeValues(valsToExpose);
    }, []);

    return <form onSubmit={props.handleSubmit(exposeValues)}>
        <div>
            <label htmlFor="nickName">Nick Name</label>
            <Field name="nickName" component="input" type="text" />
        </div>
        <div>
            <label htmlFor="commentBodyText">Text</label>
            <Field name="commentBodyText" component="input" type="text" />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}

const CreateCommentForm = reduxForm<{}, IProps>({
    // a unique name for the form
    form: 'createComment'
})(CommentForm)

export default CreateCommentForm;