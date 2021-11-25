import React from 'react'
import Grid from '@mui/material/Grid'

import TitleHeader from 'components/Headers/TitleHeader'

import ProjectPreview from 'components/Project/ProjectPreview'

interface Props {}

const Projects = (props: Props) => {
	return (
		<Grid container justifyContent='center'>
			<Grid item xs={11} md={9} lg={7} xl={6}>
				<TitleHeader
					text='My projects'
					description='A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.
'
				/>

				{Array(3)
					.fill(0)
					.map(() => (
						<ProjectPreview
							title='Project 1'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						/>
					))}
			</Grid>
		</Grid>
	)
}

export default Projects
