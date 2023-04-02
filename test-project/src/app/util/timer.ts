export class Timer {
	private endTime: number;
	public get secondsRemaining(): number {
		if (!this.active) {
        		return this.duration;
      	}
		return Math.max(0, Math.floor((this.endTime - Date.now()) / 100));
	}
  
	constructor(
		private readonly duration: number,
      	private readonly active: Boolean
	)
	{
		this.endTime = Date.now() + duration * 100;
	}
  }
