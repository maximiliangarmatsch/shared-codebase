import React, { ReactElement } from 'react'
import classNames from 'classnames'

interface BaseLayoutProps {
  children?: ReactElement
}

/**
 * Primary UI component for user interaction
 */
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="home-page">
      <div className={classNames('', {})}>{children}</div>
    </div>
  )
}
