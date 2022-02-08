import React from 'react'
import { Card, Image,Button } from 'semantic-ui-react'
import "./Post.css"

const Post = () => {
    return (
        <>
            <div className='post'>
                <Card fluid>
                    <Image src={require('../images/avatar.jpg')} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Daniel</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>
                            Daniel is a comedian living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button className="start-btn">View</Button>
                    </Card.Content>
                </Card>
            </div>
        </>
    )
  
}

export default Post