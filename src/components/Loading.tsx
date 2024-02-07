import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Loading from "./loading.json";

// TypeScript에서는 props와 state의 타입을 정의할 수 있습니다.
// 여기서는 props에 대한 타입을 정의하지 않았으므로, 빈 인터페이스를 사용합니다.
// 또한 이 컴포넌트는 state를 사용하지 않으므로 state 타입 정의도 필요 없습니다.
interface LoadingIndicatorProps {}

class LoadingIndicator extends React.Component<LoadingIndicatorProps> {
  private player: React.RefObject<Player>; // Player 타입을 사용하여 ref 타입을 명시합니다.

  constructor(props: LoadingIndicatorProps) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }

  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={false}
        src={Loading} // 로딩 애니메이션의 경로 또는 URL을 여기에 지정합니다.
        style={{ height: '20rem', width: '20rem' }}
      ></Player>
    );
  }
}

export default LoadingIndicator;
