export const youTubeGetID = (url: string) =>{
	if(url.match('https://(www.)?youtube|youtu\.be') || url.match('http://(www.)?youtube|youtu\.be')){
		const urlSections = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
		return (urlSections[2] !== undefined) ? urlSections[2].split(/[^0-9a-z_\-]/i)[0] : urlSections[0];
	}
	return null
}