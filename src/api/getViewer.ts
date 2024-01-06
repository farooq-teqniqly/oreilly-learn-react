import { ViewerData } from "./types";
import { z } from "zod";

export const GET_VIEWER_QUERY = `
    query {
        viewer {
            name
            avatarUrl
        }
    }
`;

type GetViewerResponse = {
  data: {
    viewer: ViewerData;
  };
};

export async function getViewer() {
  const response = await fetch(process.env.REACT_APP_GITHUB_URL!, {
    body: JSON.stringify({ query: GET_VIEWER_QUERY }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
    },
    method: "POST",
  });

  const body = await response.json();
  const parsedBody = assertIsGetViewerResponse(body);

  return parsedBody.data;
}

const getViewerSchema = z.object({
  name: z.string(),
  avatarUrl: z.string(),
});

const getViewerResponseSchema = z.object({
  data: z.object({
    viewer: getViewerSchema,
  }),
});

function assertIsGetViewerResponse(body: any): GetViewerResponse {
  return getViewerResponseSchema.parse(body);
}
