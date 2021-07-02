import { connect, ConnectedProps } from 'react-redux'
import type { RootState } from '../store'
import Section from './Section'

const News = (props: PropsFromRedux) => (
  <div id={'news'}>
	{Object.keys(props.news).map((sectionName: string) => (
		<Section
			key={sectionName}
			section={props.news[sectionName]} />
	))}
  </div>
)

const mapState = (news: RootState) => ({news})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(News);
