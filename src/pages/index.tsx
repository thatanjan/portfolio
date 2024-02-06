import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'
import { NextSeo } from 'next-seo'

import LinkButton from 'components/Buttons/LinkButton'

import ProfileImage from 'components/Images/ProfileImage'
import Profession from 'components/Skills/Profession'

const Index = () => {
	return (
		<>
			<NextSeo
				title='Anjan Shomodder'
				description="Portfolio website of Anjan Shomodder. Anjan is a full stack web developer, Blogger and instructor at Cules Coding youtube channel. Creator of open source Social media application 'Facesta'"
			/>

			<Box
				sx={{
					display: 'grid',
					height: '100vh',
					background: 'rgba(0,0,0,.85)',
					gridTemplateColumns: {
						xs: '1fr',
						md: '40% 55%',
						lg: '35% 40%',
					},
					gridTemplateRows: {
						xs: '1fr 1fr',
						md: '1fr',
					},
					rowGap: {
						xs: '2rem',
						md: '0px',
					},
					placeItems: {
						md: 'center',
					},
					columnGap: {
						md: '3rem',
					},
					position: 'relative',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						display: 'grid',
						placeItems: {
							xs: 'end center',
						},
						justifySelf: {
							md: 'end',
						},
					}}
				>
					<ProfileImage />
				</Box>
				<Box>
					<Grid
						container
						sx={{
							justifyContent: {
								xs: 'center',
								md: 'flex-start',
							},
							textAlign: {
								xs: 'center',
								md: 'start',
							},
						}}
					>
						<Grid
							item
							xs={10}
							component={Typography}
							variant='h4'
							sx={{ textTransform: 'uppercase' }}
						>
							Hi there!
						</Grid>
						<Grid item xs={10}>
							<Typography
								component='h1'
								variant='h3'
								sx={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
									margin: {
										xs: '.5rem 0',
									},
								}}
							>
								I&apos;m a{' '}
								<Typography
									color='primary'
									sx={{
										fontSize: 'inherit',
										fontWeight: 'bold',
										display: 'inline-block',
									}}
								>
									<Profession />
								</Typography>
							</Typography>{' '}
						</Grid>
						<Grid item xs={10}>
							<Typography>
								Experienced Full Stack Developer with a year of expertise in application
								development, covering UI and backend systems. On the lookout for
								opportunities to add value and learn from a dynamic team of
								professionals.
							</Typography>
						</Grid>

						<Grid
							item
							xs={10}
							container
							justifyContent='center'
							sx={{ marginTop: { xs: '1rem' } }}
						>
							{['Projects', 'Hire me'].map((text, index) => (
								<Grid item xs={6} key={nanoid()}>
									<LinkButton
										key={nanoid()}
										href={index ? '/contact' : '/projects'}
										variant='outlined'
										sx={{ fontWeight: 'bold', width: '95%', height: '100%' }}
									>
										{text}
									</LinkButton>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	)
}

export default Index
