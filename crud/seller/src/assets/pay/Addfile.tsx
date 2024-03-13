import './addfile.css'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
// import { Cloudinary } from "@cloudinary/url-gen";
// import {AdvancedImage} from '@cloudinary/react';
// import {fill} from "@cloudinary/url-gen/actions/resize";

const props: UploadProps = {
    name: 'file',
    action: 'http://localhost:5173/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


function Addfile() {

    // const CLIENT_ID = '171800819348-d93t22e2gvps24gcf3k9jjffethbvobq.apps.googleusercontent.com';
    // const CLIENT_SECRET = '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';
    // const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

    // const TOKEN = '1//04_MKmGVxHZDYCgYIARAAGAQSNwF-L9Irxrp4d0NocuBrc9whLac0-j0B_pw0HbrKr50LoN68S4j5HOsJopXOH1XqzawD-CXOT5I'

    // const cld = new Cloudinary({cloud: {cloudName: 'dewfiwt05'}});
    // const myImage = cld.image('docs/models'); 
    // myImage.resize(fill().width(250).height(250));

    return (
        <div className='addfile'>
            <Upload.Dragger {...props}
                multiple
                listType='picture'
                showUploadList={{ showRemoveIcon: true }}
                accept='.png,.jpg,.jpeg,.pdf'
                beforeUpload={(file) => { console.log(file); return false; }}
            >
                Click or Drag <br />
                <Button icon={<UploadOutlined />}>Evidence of money transfer</Button>
            </Upload.Dragger>
            {/* <AdvancedImage cldImg={myImage} /> */}
        </div>
    )
}

export default Addfile
