import * as React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Button, Textarea} from "../../common/FormsControls/FormFields";

const maxLength140 = maxLengthCreator(140);

const AddPostForm = (props) => {
    return (
        <form className={c.newPost} onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLength140]} component={Textarea} placeholder="Enter your post text"
                   name={'newPostText'}/>
            <Button label={'Add post'}/>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('addPostForm'));

const ReduxAddPostForm = reduxForm({form: 'addPostForm', onSubmitSuccess: afterSubmit})(AddPostForm);

const MyPosts = React.memo(props => {

    let postsElems = props.posts.map(p => (<Post msg={p.message} likes={p.likes} key={p.id}/>));

    const onButtonClick = (data) => {
        props.addPost(data.newPostText);
    };

    return (
        <div className={c.posts}>
            <div>
                <ReduxAddPostForm onSubmit={onButtonClick}/>
            </div>
            <div className={c.postsList}>
                {postsElems}
            </div>
        </div>
    );
});

export default MyPosts