import React from 'react'
import LeftProjects from '@/components/Portfolio/LeftProjects'
import RightProjects from '@/components/Portfolio/RightProjects'
import ProjectDesc from '@/components/Portfolio/ProjectDesc'

function ProjectPage() {
  return (
    <>
    <ProjectDesc/>
      <LeftProjects />
      <RightProjects />
    </>
  )
}

export default ProjectPage
