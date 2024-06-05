export const PROJECT_PLANNER_AI_ID =
  process.env.NEXT_PUBLIC_PROJECT_PLANNER_AI_ID;

const eventsEndpoint = 'http://localhost:3000/api/events'


export async function trackEvent(key: string) {
  return fetch(eventsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: key,
      projectId: PROJECT_PLANNER_AI_ID,
    }),
  });
}
