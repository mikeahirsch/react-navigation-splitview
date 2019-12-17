import SplitView, {createSplitViewNavigator} from '../../src/SplitView';

import TestList from './TestList';
import TestDetails from './TestDetails';

const routes = {
  TestList,
  TestDetails,
};

const SplitViewNavigator = createSplitViewNavigator(routes);

class ModuleNavigator extends SplitView {
  static router = SplitViewNavigator.router;
  getRoutes = () => routes;
  getNavigator = () => SplitViewNavigator;
}

export default ModuleNavigator;
