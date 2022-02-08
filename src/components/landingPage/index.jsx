import React from "react"
import { useState } from "react"
import { Button, Container, Grid, GridColumn, GridRow, Icon, Image, Form, Input } from "semantic-ui-react"
import { Link } from "react-router-dom"
import landingbg from "../images/landing-page.png"
import Post from "../Post/Post"
import "./index.css"


const LandingPage = () => {
    const [cuisineList, changeCuisineList] = useState([])
    const [posts, setPosts] = useState([1, 2, 3, 4, 5,6])
    let postCounter = 0
    return (
        <>
            <div className="navbar">
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column >
                            
                            <GridColumn >
                                <Icon name="food" />{" "}
                                <Link to="/" className="Branding">Be-A-Chef</Link>
                                
                            </GridColumn>
                    
                        </Grid.Column>
                        <Grid.Column >
                            <Link to='/chef'>Chef</Link>
                        </Grid.Column>
                        <GridColumn>
                            <a>Login</a>
                            &nbsp;
                            &nbsp;
                            {' '}
                            <a>SignUp</a>
                        </GridColumn>
                        
                    </Grid.Row>
                </Grid>
            </div>
            <div className="landingPageImage">
                <Container>
                <Grid verticalAlign='middle' centered>
                    <GridRow columns={2}>
                        
                        <GridColumn>
                            <div>
                                <Grid className="landing-text" >
                                    <GridRow>
                                        <h1 className="branding">Be-A-Chef</h1>
                                    </GridRow>
                                    <GridRow>
                                        <Button className="start-btn">Get Started</Button>
                                    </GridRow>
                                </Grid>
                            </div>
                            </GridColumn>
                            <GridColumn>
                            <div>
                                <Image src= {landingbg} />
                            </div>
                        </GridColumn>
                    </GridRow>
                </Grid>

                </Container>
            </div>
            <div className="about">
                <Grid columns={3} divided>
                    <GridRow>
                        <GridColumn>
                            <h3>500+</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium id reiciendis unde doloribus aut dolores eos vero! Ab corrupti fugit sapiente voluptas sed debitis totam, maxime veniam nesciunt quas reiciendis?</p>
                        </GridColumn>
                        <GridColumn>
                            <h3>78%</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius accusantium quasi ipsa in sapiente optio fuga deserunt excepturi voluptatem?</p>
                        </GridColumn>
                        <GridColumn>
                            <h3>Since 2021</h3>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolores recusandae distinctio iste illo odit!</p>                                    
                        </GridColumn>
                    </GridRow>

                </Grid>
            </div>
            <Container className="cuisine-selection">
                <Grid  verticalAlign="middle" columns={5}  centered>
                    <GridRow>
                        <GridColumn className="cuisine" >
                            <Image className="cuisineImage" src={require("../images/chinese.jpg")} verticalAlign="middle" centered/>
                            
                        </GridColumn>
                        <GridColumn className="cuisine">
                            <Image className="cuisineImage" src={require("../images/italian.jpg")} />
                            
                        </GridColumn>
                        <GridColumn className="cuisine">
                                <Image className="cuisineImage" src={require("../images/indian.jpg")} /> 
                        </GridColumn>
                        <GridColumn className="cuisine">
                            <Image className="cuisineImage" src={require("../images/greek.jpg")} />                            
                        </GridColumn>
                        <GridColumn className="cuisine">
                            <Image className="cuisineImage" src={require("../images/burger.jpg")} />                            
                        </GridColumn>                                            
                    </GridRow>
                </Grid>
            </Container>
            <Container textAlign="center" className="Posts" >
                
                <Grid columns={3} fluid verticalAlign="middle" centered>
                        <GridRow>
                        {posts.map((post) => {
                            return (
                                    
                                    <GridColumn>
                                        <Post className="post"/>
                                    </GridColumn>
                                    
                            )   
                    })}
                    </GridRow>
                </Grid>
                
            </Container>
        </>
    )
}

export default LandingPage