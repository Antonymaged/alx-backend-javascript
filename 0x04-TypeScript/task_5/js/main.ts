interface MajorCredits {
  credits: number,
  brand: 'Major',
}

interface MinorCredits {
  credits: number,
  brand: 'Minor',
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits):number {
  const MajorCredits: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    brend: 'Major',
  };
  return MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits):number {
  const MinorCredits: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    brend: 'Minor',
  };
  return MinorCredits;
}
