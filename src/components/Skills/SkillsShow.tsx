import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'

import Skill from 'classes/Skills/SkillClass'
import SingleSkill from 'components/Skills/SingleSkill'

interface Props {
	title: string
	skills: Skill[]
}

const SkillsShow = ({ title, skills }: Props) => {
	if (!skills|| !Array.isArray(skills) || skills.length === 0) return null
	
	return (
		<Grid container justifyContent='space-around' spacing={4} sx={{ mb: '5rem' }}>
			<Grid item xs={12}>
				<Typography
					component='h1'
					variant='h3'
					gutterBottom
					align='center'
					sx={{ textTransform: 'capitalize' }}
				>
					{title}
				</Typography>
			</Grid>

			{skills.map((skill) => (
				<Grid item xs={5} sm={4} xl={3} key={nanoid()} sx={{ textAlign: 'center' }}>
					<SingleSkill {...skill} />
				</Grid>
			))}
		</Grid>
	)
}

export default SkillsShow
