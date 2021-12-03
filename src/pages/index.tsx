import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import { NextSeo } from 'next-seo'

import LinkButton from 'components/Buttons/LinkButton'

import ProfileImage from 'components/Images/ProfileImage'
import Profession from 'components/Skills/Profession'

const BackgroundImage = () => (
	<Box
		sx={{
			position: 'fixed',
			height: '100vh',
			width: '100vw',
			overflow: 'hidden',
			zIndex: 0,
			top: 0,
			left: 0,
		}}
	>
		<Image
			alt='Anjan Shomodder'
			src='/homepageBG.jpg'
			layout='fill'
			objectFit='cover'
		/>

		<Box
			sx={{
				background: 'rgba(0,0,0,.85)',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
			}}
		/>
	</Box>
)

const Index = () => {
	return (
		<>
			<NextSeo
				title='Anjan Shomodder'
				description="Portfolio website of Anjan Shomodder. Anjan is a full stack web developer, Blogger and instructor at Cules Coding youtube channel. Creator of open source Social media application 'Confession'"
			/>

			<BackgroundImage />

			<Box
				sx={{
					display: 'grid',
					height: '100vh',
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
								I am a full stack developer who can develop applications from UI to
								backend systems. I am looking for a company where I can prove myself by
								providing great value with my skills and knowledge. I want to join a
								team where I can collaborate with intelligent people and learn from
								them.
							</Typography>
						</Grid>

						<Grid
							item
							xs={10}
							container
							justifyContent='center'
							sx={{ marginTop: { xs: '1rem' } }}
						>
							{['More about me', 'Hire me'].map((text, index) => (
								<Grid item xs={6} key={nanoid()}>
									<LinkButton
										key={nanoid()}
										href={index ? '/contact' : '/about'}
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
