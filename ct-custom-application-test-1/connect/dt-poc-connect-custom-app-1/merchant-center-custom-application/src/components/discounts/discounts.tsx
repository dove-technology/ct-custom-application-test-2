import { Link as RouterLink  } from 'react-router-dom';
import { BackIcon } from '@commercetools-uikit/icons';
import Constraints from '@commercetools-uikit/constraints';
import FlatButton from '@commercetools-uikit/flat-button';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import { useDiscountsAnalyticsFetcher } from '../../hooks/use-dovetech-connector';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';

type TDiscountsProps = {
  linkToWelcome: string;
};

const Discounts = (props: TDiscountsProps) => {
  let res = {};
  let ldg: boolean | null = false;

  const envTestVar = useApplicationContext(
    (context) => (context.environment as any).testVar
  );

  const { result, loading } = useDiscountsAnalyticsFetcher();
  res = result;
  ldg = loading;

  return (
    <Spacings.Stack scale="xl">
      <Spacings.Stack scale="xs">
        <FlatButton
          as={RouterLink}
          to={props.linkToWelcome}
          label="Back"
          icon={<BackIcon />}
        />
        <Text.Headline as="h2">Discounts</Text.Headline>
      </Spacings.Stack>

      <Constraints.Horizontal max={13}>
        <ContentNotification type="info">
          <Text.Body>
            Some discounts body content here - {JSON.stringify(envTestVar)}
          </Text.Body>
        </ContentNotification>
      </Constraints.Horizontal>

      {ldg && <LoadingSpinner />}

      <Spacings.Stack scale="l">
        <div><pre><code>{JSON.stringify(result)}</code></pre></div>
      </Spacings.Stack>
      <Spacings.Stack scale="l">
        <div>
          <pre>
            <code>{JSON.stringify(res)}</code>
          </pre>
        </div>
      </Spacings.Stack>
    </Spacings.Stack>
  );
};
Discounts.displayName = 'Discounts';

export default Discounts;
