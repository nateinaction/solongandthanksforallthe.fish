import { Row, Col, Image } from 'react-bootstrap';
import missingImage from '../images/missing.svg';
import discussionImage from '../images/discussion.svg';
import type { articleData } from '../store/newsReducer'

const getImage = (src: string) => {
    if (src === 'self' || src === '') {
        return {
            src: discussionImage,
            class: 'discussion-image'
        }
    } else if (src === 'default') {
        return {
            src: missingImage,
            class: 'missing-image'
        }
    }

    return {
        src: src,
        class: 'src-image'
    }
}

const Thumbnail = (props: { url: string; thumbnail: string; }) => {
    const image = getImage(props.thumbnail);
    return (
        <a target='_blank' rel='noopener noreferrer' href={props.url} className='article-image'>
            <Image src={image.src} className={image.class} thumbnail />
        </a>
    )
}

const Title = (props: { url: string; title: string; }) => (
    <p className='article-title'>
        <a target='_blank' rel='noopener noreferrer' href={props.url}>
            {props.title}
        </a>
    </p>
)

const Discuss = (props: { discussionUrlPath: string; numComments: number; }) => (
    <Col xs='auto'>
        <a className='discuss' target='_blank' rel='noopener noreferrer' href={`https://www.reddit.com${props.discussionUrlPath}`}>
            {`💬 Discuss (${props.numComments})`}
        </a>
    </Col>
)

// Share creates a clickable element that brings up the native OS sharing menu
const Share = (props: { title: string; url: string; }) => {
    // Not all platforms support the Web Share API (like Chrome on Mac) https://caniuse.com/web-share
    if (!!navigator.share) {
        return (
            <Col xs='auto'>
                <a className='share' onClick={() => navigator.share({ title: props.title, url: props.url })}>
                    {'📤 Share'}
                </a>
            </Col>
        )
    }
    return <p/>
}

const Meta = (props: { discussionUrlPath: string; numComments: number; title: string; url: string }) => {
    return (
        <Row className='article-meta'>
            <Discuss discussionUrlPath={props.discussionUrlPath} numComments={props.numComments} />
            <Share title={props.title} url={props.url} />
        </Row>
    )
}

const Article = (props: {article: articleData}) => (
    <Row className='article'>
        <Col xs={12} md={2}>
            <Thumbnail url={props.article.url} thumbnail={props.article.thumbnail} />
        </Col>
        <Col xs={12} md={10}>
            <Title url={props.article.url} title={props.article.title} />
            <Meta 
                discussionUrlPath={props.article.permalink}
                numComments={props.article.num_comments}
                title={props.article.title}
                url={props.article.url} />
        </Col>
    </Row>
)

export default Article
