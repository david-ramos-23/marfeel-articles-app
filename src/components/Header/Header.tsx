import React from 'react';
import { Logo } from '../shared/Logo';
import { BurgerMenu } from './components/BurgerMenu';
import { Section } from './components/Section';
import { StyledHeader, StyledHeaderTitle, StyledHeaderTop } from './styled';
import { HeaderState } from './types';
import { HEADER_WAYPOINTS } from '../../config/header';

let ticking = false;

export class Header extends React.PureComponent<unknown, HeaderState> {
  public state = {
    isNavigationVisible: window.scrollY <= HEADER_WAYPOINTS.firstWaypoint,
    isHeaderVisible: window.scrollY <= HEADER_WAYPOINTS.secondWaypont,
  };

  private handleScroll = () => {
    const { isNavigationVisible, isHeaderVisible } = this.state;
    const newNavigationState = window.scrollY <= HEADER_WAYPOINTS.firstWaypoint;
    const newHeaderState = window.scrollY <= HEADER_WAYPOINTS.secondWaypont;
    if (
      !ticking &&
      (isHeaderVisible !== newHeaderState ||
        isNavigationVisible !== newNavigationState)
    ) {
      ticking = true;

      this.setState({
        isNavigationVisible: newNavigationState,
        isHeaderVisible: newHeaderState,
      });

      ticking = false;
    }
  };

  public componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  public render(): JSX.Element {
    const { isHeaderVisible, isNavigationVisible } = this.state;

    if (!isHeaderVisible) {
      return <BurgerMenu showWrapper={true} />;
    }

    return (
      <StyledHeader>
        <StyledHeaderTop>
          <BurgerMenu />
          <StyledHeaderTitle>
            <Logo />
          </StyledHeaderTitle>
        </StyledHeaderTop>
        {isNavigationVisible && <Section />}
      </StyledHeader>
    );
  }
}
