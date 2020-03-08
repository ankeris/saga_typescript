import React from "react";
import { reduxForm, Field } from "redux-form";

const CommentForm = (props: any) => {
    const { handleSubmit } = props

    const theSubmit = (values: any) => {
        console.log(values);
    }

    return <form onSubmit={handleSubmit(theSubmit)}>
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

const CreateCommentForm = reduxForm({
    // a unique name for the form
    form: 'createComment'
})(CommentForm)

export default CreateCommentForm;