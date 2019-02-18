import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'
import { ImageBlockConfig } from 'Dante2/package/es/components/blocks/image';
import { PlaceholderBlockConfig } from 'Dante2/package/es/components/blocks/placeholder';
import { Button } from 'react-materialize';
import Dante from 'Dante2';
import { saveArticle } from '../../../actions/createArticleActions';

import upload from '../../../utils/ImageUploader';



class CreateArticle extends Component {
    constructor() {
        super();
        this.state = {
        title: '',
        description: '',
        body: '',
        tags: [],
        image: '',
        }
    }   

    getEditorContent = () => this.editor.emitSerializedOutput();

    getImages = () => {
        const images = [];
        if (this.editor) {
          const { blocks } = this.getEditorContent();
    
          for (let i = 0; i < blocks.length; i += 1) {
            let image = null;
            if (blocks[i].type === 'image') {
              const { data: { url } } = blocks[i];
              image = url;
            }
            if (image) {
              images.push(image);
            }
          }
        }
        return images;
      };

    bodyChange = (state) => {
        this.editor = state;
        const { blocks } = this.getEditorContent();
        for (let i = 0; i < blocks.length; i += 1) {
            if (blocks[i].type ==='unstyled'){
                this.setState({ body:  blocks[i].text});
            }
        }
        
      };
    
    handleTagChange(tags) {
        this.setState({tags})
    }
    titleDescriptionChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    handleUpload = (file, state) => {
        upload({
          body: file,
          progress: (e) => {
            state.updateProgressBar(e);
          },
        })
          .then((data) => {
            state.uploadCompleted(data.secure_url)
            const str = this.state.body.toString();
            const space = ' ';
            this.setState({
                body: str.concat(space,data.secure_url)
            })
          });
      };
      
  
  render() {
    return (
    
      <div >
        <input
            id= 'title'
            onChange={this.titleDescriptionChange}
            type='text' 
            placeholder='Title'/>
        <input
            id= 'description'
            onChange={this.titleDescriptionChange}
            type='text' placeholder='Description'/>
        <Dante
            widgets={[ImageBlockConfig({
                options: {
                    upload_url: 'https://api.cloudinary.com/v1_1/dadrqjrpw/image/upload',
                    upload_callback: this.handleUpload,
                    upload_handler: this.handleUpload,
                }
            }),
            PlaceholderBlockConfig(),
        ]}
            onChange={ this.bodyChange}
        />

        <TagsInput value={this.state.tags} onChange={ this.handleTagChange.bind(this)} />
        <Button onClick={ this.createArticle}>PUBLISH</Button>
      </div>
    );
  }
}

// CreateArticle.propTypes = {
//     saveArticle: PropTypes.func.isRequired,
//     //errors: PropTypes.object.isRequired,
//     //editorState: PropTypes.shape({}),
//   };
// CreateArticle.defaultProps = {
//     editorState: PropTypes.shape({}),
// }
const mapStateToProps = state => ({
    article: state.article,
    errors: state.errors
  });

  export default withRouter(
    connect(
      mapStateToProps,
      { saveArticle }
    )(CreateArticle)
  );
