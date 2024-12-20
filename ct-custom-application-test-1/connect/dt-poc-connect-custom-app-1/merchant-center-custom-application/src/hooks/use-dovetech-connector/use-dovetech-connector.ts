import { useAsyncDispatch, actions } from '@commercetools-frontend/sdk';
import { MC_API_PROXY_TARGETS } from '@commercetools-frontend/constants';
import { useEffect, useState } from 'react';

export const useDiscountsAnalyticsFetcher = () => {
  const [discountAnalyticsResult, setDiscountAnalyticsResult] = useState({});

  const dispatch = useAsyncDispatch();

  useEffect(() => {
    async function execute() {
      try {
        
        const result = await dispatch(
          actions.forwardTo.get({
            mcApiProxyTarget: MC_API_PROXY_TARGETS.COMMERCETOOLS_PLATFORM,
            uri: 'https://dummyjson.com/c/3029-d29f-4014-9fb4',
            headers: {
              "accept": "application/json",
            }
          })
        );

        console.dir('result: ', result);

        setDiscountAnalyticsResult(result as any);
      } catch (error) {
        // Update state with `error`
      }
    }
    execute();
  }, [dispatch]);

  return {
    result: discountAnalyticsResult,
    loading: null,
  };
};
