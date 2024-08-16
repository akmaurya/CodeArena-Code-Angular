export interface EndpointDetail {
    name: string;
    method: string;
    url: string;
    parameters: Array<{ name: string, type: string }>;
  }
  
  export interface EndpointsResponse {
    [className: string]: {
      [endpoint: string]: Array<{ name: string, type: string }>
    };
  }
  