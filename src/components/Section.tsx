import type { section, article } from '../store/newsReducer'
import Article from './Article';

const Title = (props: { title: string }) => (
	<h1 className={`section-title`}>
		{props.title}
	</h1>
)

const Section = (props: { section: section }): JSX.Element => {
	if (props.section.isFetching) {
    return (
      <div className={`section`}>
        <Title title={props.section.title} />
        <span>Loading...</span>
      </div>
    )
	}

	return (
		<div className={`section`}>
			<Title title={props.section.title} />
      {props.section.articles.map((article: article, index: number) => (
        <Article key={index} article={article.data} />
      ))}
		</div>
	)
}

export default Section;
