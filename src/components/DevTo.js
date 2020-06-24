import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FadeIn from 'src/components/FadeIn'
import axios from 'axios'

const Styles = styled.div`
/* max-width:800px; */
margin: 3rem 0;
.posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.post {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: rgba(255, 255, 255, .1);
    margin: 1rem;
    padding: .5rem;
    min-height: 100px;
    max-width: 800px;
    box-shadow: 0px 0px 19px -5px rgba(255,255,255,0.1);
}

.post-content {
    width: 300px;
}

h3 {
    font-weight: 400;
    justify-self: flex-start;
    align-self: center;
}

h2 .count {
    transform: rotate(-8deg);
    display: inline-block;
}

 .post-meta {
     display: flex;
     flex-direction: column;
     /* flex-wrap: wrap; */
     justify-content: center;
     align-items: center;
 }

 .post-meta > div {
     margin: .2rem;
 }

.post a {
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.is-answered {
    color: #73C991;
}

.post-date {
    color: #bdc8c9;
}

.post-owner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 50px; */
}

.post-owner-image{
    max-width: 50px;
    margin: 0.1rem;
    padding: 0;
    border-radius: 68% 32% 19% 81% / 29% 27% 73% 71% ;
}
.post-owner span {
    text-align: center;
}
`

const htmlDecode = innerHTML => Object.assign(document.createElement('textarea'), { innerHTML }).value;

const localDate = (d) => {
    let date = new Date(d)
    return date.toLocaleDateString()
}

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-content">
                <h3>
                    <a href={post.url}>
                        {htmlDecode(post.title)}
                    </a>
                </h3>
                <p>
                    {post.description}
                </p>

            </div>
            <div className="post-meta">
                <div className="post-owner">
                    <a href={post.user.website_url}>
                        <img src={post.user.profile_image} title={post.user.name} alt={`${post.user.display_name} profile from Stack Overflow`} className='post-owner-image' />
                        <div className='post-owner-name'>
                            {post.user.name}
                        </div>
                    </a>
                </div>
                <div className="post-views"><span role='img'>♥</span>{post.public_reactions_count}</div>
                <div className="post-date">{localDate(post.published_timestamp)}</div>

            </div>

        </div>
    )

}

const DevTo = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const result = await axios(
            'https://dev.to/api/articles?tag=kedro&per_page=5&page=1'

        )
        setData(result.data)
    }, [])

    return (
        <Styles>
            <FadeIn delay={100}>
                <div className="posts">
                    <h2><span className='count'>5</span> most Recent Articles on <a href='https://dev.to/t/kedro' title='kedro tag on DEV.to'>Dev.to</a></h2>
                    <em>posted to the #kedro tag</em>
                    {data.map(post => <Post post={post} />)}
                </div>
            </FadeIn>
        </Styles>
    )
}

export default DevTo
