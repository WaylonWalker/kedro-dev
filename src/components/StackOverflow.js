import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FadeIn from 'src/components/FadeIn'
import axios from 'axios'

const Styles = styled.div`
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
    max-width: 500px;
    box-shadow: 0px 0px 19px -5px rgba(255,255,255,0.1);
}

h3 {
    width: 300px;
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
}

.is-answered {
    color: #73C991;
}

.post-date {
    color: #bdc8c9;
}
.post-owner {
    max-width: 50px;
}

.post-owner-image{
    margin: 0;
    padding: 0;
    border-radius: 68% 32% 19% 81% / 29% 27% 73% 71% ;
}
.post-owner span {
    text-align: center;
}
`

const htmlDecode = innerHTML => Object.assign(document.createElement('textarea'), { innerHTML }).value;

const localDate = (d) => {
    let date = new Date(0)
    date.setUTCSeconds(d)
    return date.toLocaleDateString()
}

const Post = ({ post }) => {
    return (
        <div className="post">
            <h3>
                <a href={post.link}>
                    {htmlDecode(post.title)}
                </a>
            </h3>
            <div className="post-meta">
                <div className="meta-left">
                    <div className="is-answered">{post.is_answered === true ? '✔answered' : ''}</div>
                    <div className="post-views"><span role='img'>👀</span>{post.view_count}</div>
                    <div className="post-date">{localDate(post.creation_date)}</div>

                </div>
                <div className="post-owner">
                    <a href={post.owner.link}>
                        <img src={post.owner.profile_image} title={post.owner.display_name} alt={`${post.owner.display_name} profile from Stack Overflow`} className='post-owner-image' />
                        <span>
                            {post.owner.display_name}
                        </span>
                    </a>
                </div>

            </div>

        </div>
    )

}

const StackOverflow = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const result = await axios(
            'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&tagged=kedro&pagesize=5'
        )
        setData(result.data.items)
    }, [])

    return (
        <Styles>
            <FadeIn delay={100}>
                <div className="posts">
                    <h2><span className='count'>5</span> most Recent Questions from <a href='https://stackoverflow.com/questions/tagged/kedro' title='kedro tag on stack overflow'>Stack Overflow</a></h2>
                    {data.map(post => <Post post={post} />)}
                </div>
            </FadeIn>
        </Styles>
    )
}

export default StackOverflow
