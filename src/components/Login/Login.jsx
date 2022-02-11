import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"
import pizzaVideo from "../../assests/video.mp4"
import {client} from "../../client"
import "./Login.css"
import { Button } from 'semantic-ui-react';
const Login = () => {
    const navigate = useNavigate()
    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj))
        const { name, googleId, imageUrl } = response.profileObj
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image:imageUrl,
        }
        client.createIfNotExists(doc)
            .then(() => {
            navigate('/',{replace:true})
        })
    }   
    return (
        < div className='login'>
            <div className='login-video-container'>
                <div className='black-screen'></div>
                <video
                src={pizzaVideo}
                    type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='login-video'
                />
            </div>
            <div className='login-screen'>
                <div className='login-comp'>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                        render={(renderProps) => (
                            <Button
                                className='login-btn'
                                primary
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            ><FcGoogle className='google-icon' /> Sign in with Google</Button>
                            
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                    />
                </div>
            </div>
        </div >
    );
};

export default Login;
