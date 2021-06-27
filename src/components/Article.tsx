import { Row, Col, Image } from 'react-bootstrap';
import missingImage from '../images/missing.svg';
import discussionImage from '../images/discussion.svg';
import './Article.css';

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
    <a className='discuss' target='_blank' rel='noopener noreferrer' href={`https://www.reddit.com${props.discussionUrlPath}`}>
        {`💬 Discuss (${props.numComments})`}
    </a>
)

const Share = (props: { title: string; url: string; }) => (
    <a className='share' onClick={() => navigator.share({ title: props.title, url: props.url })}>
        {'📤 Share'}
    </a>
)

const Meta = (props: { discussionUrlPath: string; numComments: number; title: string; url: string }) => (
    <Row className='article-meta'>
        <Col xs='auto'>
            <Discuss discussionUrlPath={props.discussionUrlPath} numComments={props.numComments} />
        </Col>
        <Col xs='auto'>
            <Share title={props.title} url={props.url} />
        </Col>
    </Row>
)

const Article = (props: { url: string; thumbnail: string; title: string; discussion: string; numComments: number; }) => (
    <Row className='article'>
        <Col xs={12} md={2}>
            <Thumbnail url={props.url} thumbnail={props.thumbnail} />
        </Col>
        <Col xs={12} md={10}>
            <Title url={props.url} title={props.title} />
            <Meta discussionUrlPath={props.discussion} numComments={props.numComments} title={props.title} url={props.url} />
        </Col>
    </Row>
)

export default Article
