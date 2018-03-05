import { WorkflowStep } from "./workflow-step";
import { SubscriptionStepBody } from "./subscription-step-body";
export declare class SubscriptionStep extends WorkflowStep<SubscriptionStepBody> {
    eventKey: (data: any) => any;
    eventName: string;
}
