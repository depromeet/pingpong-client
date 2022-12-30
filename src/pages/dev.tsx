import { useRouter } from 'next/router';
import { useState } from 'react';

export default function DevPage() {
  const [access, setAccess] = useState(
    'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzIzNjQzNTMsInN1YiI6Iu2ZqeyYiOuCmCIsIm1lbWJlcklkIjoyMywiZXhwIjoxNjcyNDUwNzUzfQ.tSnyREJDgBv1aC_Sqmc8RS0NB5J-XynvaZN2Q3oAHco1NhhALOoIKI52_DaaXtv5fbs90ci2TF5ZqDS1gRC5AQ',
  );
  const [refresh, setRefresh] = useState(
    'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzIzNjQzNTMsInN1YiI6Iu2ZqeyYiOuCmCIsIm1lbWJlcklkIjoyMywiZXhwIjoxNjc0OTU2MzUzfQ.tlpt27UD06KbkQ3QhvWWMelaPl_-VgPe6uEIkedW5nn1e5l0_uOfiIfpxOXwC1JokEeTJWzdb48snLHGL0PsMw',
  );
  const [redirect, setRedirect] = useState('https://dev-fe.ping-pong.world/nickname');
  const [oauth2, setOauth2] = useState(
    'rO0ABXNyAExvcmcuc3ByaW5nZnJhbWV3b3JrLnNlY3VyaXR5Lm9hdXRoMi5jb3JlLmVuZHBvaW50Lk9BdXRoMkF1dGhvcml6YXRpb25SZXF1ZXN0AAAAAAAAAjoCAApMABRhZGRpdGlvbmFsUGFyYW1ldGVyc3QAD0xqYXZhL3V0aWwvTWFwO0wACmF0dHJpYnV0ZXNxAH4AAUwAFmF1dGhvcml6YXRpb25HcmFudFR5cGV0AEFMb3JnL3NwcmluZ2ZyYW1ld29yay9zZWN1cml0eS9vYXV0aDIvY29yZS9BdXRob3JpemF0aW9uR3JhbnRUeXBlO0wAF2F1dGhvcml6YXRpb25SZXF1ZXN0VXJpdAASTGphdmEvbGFuZy9TdHJpbmc7TAAQYXV0aG9yaXphdGlvblVyaXEAfgADTAAIY2xpZW50SWRxAH4AA0wAC3JlZGlyZWN0VXJpcQB-AANMAAxyZXNwb25zZVR5cGV0AFNMb3JnL3NwcmluZ2ZyYW1ld29yay9zZWN1cml0eS9vYXV0aDIvY29yZS9lbmRwb2ludC9PQXV0aDJBdXRob3JpemF0aW9uUmVzcG9uc2VUeXBlO0wABnNjb3Blc3QAD0xqYXZhL3V0aWwvU2V0O0wABXN0YXRlcQB-AAN4cHNyACVqYXZhLnV0aWwuQ29sbGVjdGlvbnMkVW5tb2RpZmlhYmxlTWFw8aWo_nT1B0ICAAFMAAFtcQB-AAF4cHNyABdqYXZhLnV0aWwuTGlua2VkSGFzaE1hcDTATlwQbMD7AgABWgALYWNjZXNzT3JkZXJ4cgARamF2YS51dGlsLkhhc2hNYXAFB9rBwxZg0QMAAkYACmxvYWRGYWN0b3JJAAl0aHJlc2hvbGR4cD9AAAAAAAAMdwgAAAAQAAAAAXQABW5vbmNldAArZXRsVmtPbzBYbWJPUUN3dkg1eFR4QjJaN0VnSEFNZ1FLMEN3ZjRhZW8wVXgAc3EAfgAHc3EAfgAJP0AAAAAAAAx3CAAAABAAAAACdAAPcmVnaXN0cmF0aW9uX2lkdAAFYXBwbGVxAH4ADHQAgG9UVUdLVXM2VjBHSHV5R1lYYjhzRHhCM2Y5elkxNDF3N1VlOE1lUHZnb1lWOWlxV2kwVzE1N25abzFVZXRKV0hVa1E0SEJIeC1RQmdhcEVOcG1DOGlkZlFZaTRhUDRtOHE1UW5CaTRKbFBGMnBsei1QZTJHc0ZMZU9lVzZQWFBIeABzcgA_b3JnLnNwcmluZ2ZyYW1ld29yay5zZWN1cml0eS5vYXV0aDIuY29yZS5BdXRob3JpemF0aW9uR3JhbnRUeXBlAAAAAAAAAjoCAAFMAAV2YWx1ZXEAfgADeHB0ABJhdXRob3JpemF0aW9uX2NvZGV0ATJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tL2F1dGgvYXV0aG9yaXplP3Jlc3BvbnNlX21vZGU9Zm9ybV9wb3N0JnJlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnRfaWQ9Y29tLmRwbS5waW5ncG9uZy1sb2dpbiZzY29wZT1vcGVuaWQlMjBuYW1lJTIwZW1haWwmc3RhdGU9dFYwa0xCdWxrRmVHNWYzSzVCbkw3bTBlV08yaWFzTzdNQ3FMeUlPd20tZyUzRCZyZWRpcmVjdF91cmk9aHR0cHM6Ly9kZXYtYmUucGluZy1wb25nLndvcmxkL2FwcGxlL3JlZGlyZWN0Jm5vbmNlPWV0bFZrT28wWG1iT1FDd3ZINXhUeEIyWjdFZ0hBTWdRSzBDd2Y0YWVvMFV0AEBodHRwczovL2FwcGxlaWQuYXBwbGUuY29tL2F1dGgvYXV0aG9yaXplP3Jlc3BvbnNlX21vZGU9Zm9ybV9wb3N0dAAWY29tLmRwbS5waW5ncG9uZy1sb2dpbnQALWh0dHBzOi8vZGV2LWJlLnBpbmctcG9uZy53b3JsZC9hcHBsZS9yZWRpcmVjdHNyAFFvcmcuc3ByaW5nZnJhbWV3b3JrLnNlY3VyaXR5Lm9hdXRoMi5jb3JlLmVuZHBvaW50Lk9BdXRoMkF1dGhvcml6YXRpb25SZXNwb25zZVR5cGUAAAAAAAACOgIAAUwABXZhbHVlcQB-AAN4cHQABGNvZGVzcgAlamF2YS51dGlsLkNvbGxlY3Rpb25zJFVubW9kaWZpYWJsZVNldIAdktGPm4BVAgAAeHIALGphdmEudXRpbC5Db2xsZWN0aW9ucyRVbm1vZGlmaWFibGVDb2xsZWN0aW9uGUIAgMte9x4CAAFMAAFjdAAWTGphdmEvdXRpbC9Db2xsZWN0aW9uO3hwc3IAF2phdmEudXRpbC5MaW5rZWRIYXNoU2V02GzXWpXdKh4CAAB4cgARamF2YS51dGlsLkhhc2hTZXS6RIWVlri3NAMAAHhwdwwAAAAQP0AAAAAAAAN0AAZvcGVuaWR0AARuYW1ldAAFZW1haWx4dAAsdFYwa0xCdWxrRmVHNWYzSzVCbkw3bTBlV08yaWFzTzdNQ3FMeUlPd20tZz0=',
  );

  const router = useRouter();

  const onClick = () => {
    const setCookie = (cookieName: string, value: string) => {
      const exdate = new Date();
      exdate.setDate(exdate.getDate() + 3);
      const cookieValue = encodeURI(value) + (exdate == null ? '' : '; expires=' + exdate.toUTCString());
      document.cookie = cookieName + '=' + cookieValue;
    };

    [
      { name: 'access_token', value: access },
      { name: 'refresh_token', value: refresh },
      { name: 'redirect_uri', value: redirect },
      { name: 'oauth2_auth_request', value: oauth2 },
    ].forEach((cookie) => setCookie(cookie.name, cookie.value));

    router.push('/main');
  };

  return (
    <div className="w-full p-5">
      <label className="flex flex-col mb-[10px] text-b5">
        access_token
        <input
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          value={access}
          onChange={(e) => setAccess(e.target.value)}
        />
      </label>
      <label className="flex flex-col mb-[10px] text-b5">
        refresh_token
        <input
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          value={refresh}
          onChange={(e) => setRefresh(e.target.value)}
        />
      </label>
      <label className="flex flex-col mb-[10px] text-b5">
        redirect_uri
        <input
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          value={redirect}
          onChange={(e) => setRedirect(e.target.value)}
        />
      </label>
      <label className="flex flex-col mb-[10px] text-b5">
        oauth2_auth_request
        <input
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          value={oauth2}
          onChange={(e) => setOauth2(e.target.value)}
        />
      </label>
      <button className="bg-gray-300 p-3 w-full" onClick={onClick}>
        get Token
      </button>
    </div>
  );
}
