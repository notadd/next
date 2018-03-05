import { EventSubscription } from './event-subscription';
import { ExecutionError } from './execution-error';
export declare class WorkflowExecutorResult {
    subscriptions: Array<EventSubscription>;
    errors: Array<ExecutionError>;
}
