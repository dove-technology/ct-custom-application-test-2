import type { ReactNode } from 'react';
import Constraints from '@commercetools-uikit/constraints';
import Spacings from '@commercetools-uikit/spacings';
// import Text from '@commercetools-uikit/text';

type TWrapWithProps = {
  children: ReactNode;
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
};
const WrapWith = (props: TWrapWithProps) => (
  <>{props.condition ? props.wrapper(props.children) : props.children}</>
);
WrapWith.displayName = 'WrapWith';

const Dovetech = () => {
  return (
    <Constraints.Horizontal max={16}>
      <Spacings.Stack scale="xl">
        {/* <Text.Headline as="h1">Non-intl message</Text.Headline> */}
        <div>Dovetech welcome content here...</div>       
      </Spacings.Stack>
    </Constraints.Horizontal>
  );
};
Dovetech.displayName = 'Dovetech';

export default Dovetech;
