import { useState, useEffect } from "react";
import {
  Grid2,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Select,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const Dictionary = () => {
  const [c_id, setC_id] = useState("");
  const [word, setWord] = useState("React란");
  const [des, setDes] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid2 container spacing={2}>
        <Grid2 size={6} sx={{ mt: 5, ml: 25 }}>
          <Select
            id="category"
            fullWidth
            displayEmpty
            value={c_id}
            onChange={(e) => setC_id(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // 기본 테두리 색상
                  borderWidth: "2px", // 기본 테두리 두께
                },
                "&:hover fieldset": {
                  borderColor: "blue", // 호버 시 테두리 색상
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green", // 포커스 시 테두리 색상
                  borderWidth: "3px", // 포커스 시 테두리 두께
                },
              },
            }}
          >
            <MenuItem value="">조회할 카테고리 선택해 주세요.</MenuItem>
            <MenuItem value={1}>프로그래밍</MenuItem>
            <MenuItem value={2}>상식</MenuItem>
            <MenuItem value={3}>문학</MenuItem>
            <MenuItem value={4}>전화번호</MenuItem>
            <MenuItem value={5}>꽃나무이름</MenuItem>
          </Select>
        </Grid2>
        <Grid2 size={3} sx={{ mt: 6, ml: 5, mr: 5 }}>
          <Stack spacing={2} direction="row">
            <Button
              onClick={(e) => {
                // const data = handlechatGpt(word);
              }}
              variant="contained"
              sx={{ width: "150px" }}
            >
              내 사전 조회
            </Button>
            <Button
              onClick={async (e) => {
                // const data = await handlefetchWord(word);
                // console.log("조회후 dictionary data 수신 >>", data);
                // handleDisplay(data);
              }}
              variant="outlined"
              sx={{ width: "150px" }}
            >
              선택 단어 삭제
            </Button>
          </Stack>
        </Grid2>
        <Grid2 size={3} sx={{ mt: 3, ml: 5 }} pacing={1}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="number">
                  1
                </Avatar>
              }
              // action={     // 기능 사용하게 있을지 고민 필요
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={`${word}`}
              subheader="2024-11-24"
            />
            <CardMedia
              component="img"
              height="150"
              image="./logo192.png"
              alt={`${word}_img`}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                React라는 용어를 chatGpt를 통해 문의하여 저장해 두었던
                사전입니다.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="level">
                <SentimentVeryDissatisfiedIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  React는 Facebook(현재 Meta Platforms)에 의해 개발된 오픈 소스
                  자바스크립트 라이브러리로, 사용자 인터페이스(UI)를 구축하기
                  위해 사용됩니다. React는 컴포넌트 기반 아키텍처를 기반으로
                  하며, 이를 통해 대규모 애플리케이션의 UI를 모듈화하고 재사용
                  가능하게 설계할 수 있습니다.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  주요 특징은 다음과 같습니다: 1. **컴포넌트 기반**: UI를
                  독립적인 컴포넌트 단위로 나누어 설계할 수 있습니다. 각
                  컴포넌트는 자체적인 상태와 로직을 가질 수 있어 관리가
                  용이합니다. 2. **가상 DOM(Virtual DOM)**: React는 변경 사항이
                  실제 DOM에 반영되기 전에 가상 DOM을 통해 변경을 먼저
                  처리하므로, 실제 DOM 조작 횟수를 최소화하여 성능을
                  최적화합니다. 3. **단방향 데이터 바인딩**: 데이터의 흐름이
                  위에서 아래로 일정하게 유지되어 데이터의 변화를 예측하기 쉽고
                  디버깅이 용이합니다. 4. **JSX**: JavaScript를 확장한 문법으로,
                  HTML과 유사한 코드를 사용하여 자바스크립트 파일 안에 UI
                  컴포넌트를 정의할 수 있습니다.
                </Typography>
                {/* <Typography sx={{ marginBottom: 2 }}>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.) */}
                {/* </Typography> */}
                <Typography>
                  React는 단순한 뷰 라이브러리로 시작했지만, 현대 웹 개발에서
                  매우 중요한 역할을 차지하고 있으며, 다양한 도구와 생태계가
                  이를 보완하여 하나의 완벽한 프레임워크처럼 사용되기도 합니다.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid2>
        <Grid2 size={3} sx={{ mt: 3, ml: 1 }} pacing={1}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="number">
                  2
                </Avatar>
              }
              // action={     // 기능 사용하게 있을지 고민 필요
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={`${word}`}
              subheader="2024-11-24"
            />
            <CardMedia
              component="img"
              height="150"
              image="./react.png"
              alt={`${word}_img`}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                React라는 용어를 chatGpt를 통해 문의하여 저장해 두었던
                사전입니다.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="level">
                {/* <FavoriteIcon /> */}
                <SentimentVerySatisfiedIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  React는 Facebook(현재 Meta Platforms)에 의해 개발된 오픈 소스
                  자바스크립트 라이브러리로, 사용자 인터페이스(UI)를 구축하기
                  위해 사용됩니다. React는 컴포넌트 기반 아키텍처를 기반으로
                  하며, 이를 통해 대규모 애플리케이션의 UI를 모듈화하고 재사용
                  가능하게 설계할 수 있습니다.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  주요 특징은 다음과 같습니다: 1. **컴포넌트 기반**: UI를
                  독립적인 컴포넌트 단위로 나누어 설계할 수 있습니다. 각
                  컴포넌트는 자체적인 상태와 로직을 가질 수 있어 관리가
                  용이합니다. 2. **가상 DOM(Virtual DOM)**: React는 변경 사항이
                  실제 DOM에 반영되기 전에 가상 DOM을 통해 변경을 먼저
                  처리하므로, 실제 DOM 조작 횟수를 최소화하여 성능을
                  최적화합니다. 3. **단방향 데이터 바인딩**: 데이터의 흐름이
                  위에서 아래로 일정하게 유지되어 데이터의 변화를 예측하기 쉽고
                  디버깅이 용이합니다. 4. **JSX**: JavaScript를 확장한 문법으로,
                  HTML과 유사한 코드를 사용하여 자바스크립트 파일 안에 UI
                  컴포넌트를 정의할 수 있습니다.
                </Typography>
                {/* <Typography sx={{ marginBottom: 2 }}>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.) */}
                {/* </Typography> */}
                <Typography>
                  React는 단순한 뷰 라이브러리로 시작했지만, 현대 웹 개발에서
                  매우 중요한 역할을 차지하고 있으며, 다양한 도구와 생태계가
                  이를 보완하여 하나의 완벽한 프레임워크처럼 사용되기도 합니다.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid2>
        <Grid2 size={3} sx={{ mt: 3, ml: 1 }} pacing={1}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="number">
                  3
                </Avatar>
              }
              // action={     // 기능 사용하게 있을지 고민 필요
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={`${word}`}
              subheader="2024-11-24"
            />
            <CardMedia
              component="img"
              height="150"
              image="./react.png"
              alt={`${word}_img`}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                React라는 용어를 chatGpt를 통해 문의하여 저장해 두었던
                사전입니다.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="level">
                <SentimentNeutralIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  React는 Facebook(현재 Meta Platforms)에 의해 개발된 오픈 소스
                  자바스크립트 라이브러리로, 사용자 인터페이스(UI)를 구축하기
                  위해 사용됩니다. React는 컴포넌트 기반 아키텍처를 기반으로
                  하며, 이를 통해 대규모 애플리케이션의 UI를 모듈화하고 재사용
                  가능하게 설계할 수 있습니다.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  주요 특징은 다음과 같습니다: 1. **컴포넌트 기반**: UI를
                  독립적인 컴포넌트 단위로 나누어 설계할 수 있습니다. 각
                  컴포넌트는 자체적인 상태와 로직을 가질 수 있어 관리가
                  용이합니다. 2. **가상 DOM(Virtual DOM)**: React는 변경 사항이
                  실제 DOM에 반영되기 전에 가상 DOM을 통해 변경을 먼저
                  처리하므로, 실제 DOM 조작 횟수를 최소화하여 성능을
                  최적화합니다. 3. **단방향 데이터 바인딩**: 데이터의 흐름이
                  위에서 아래로 일정하게 유지되어 데이터의 변화를 예측하기 쉽고
                  디버깅이 용이합니다. 4. **JSX**: JavaScript를 확장한 문법으로,
                  HTML과 유사한 코드를 사용하여 자바스크립트 파일 안에 UI
                  컴포넌트를 정의할 수 있습니다.
                </Typography>
                {/* <Typography sx={{ marginBottom: 2 }}>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.) */}
                {/* </Typography> */}
                <Typography>
                  React는 단순한 뷰 라이브러리로 시작했지만, 현대 웹 개발에서
                  매우 중요한 역할을 차지하고 있으며, 다양한 도구와 생태계가
                  이를 보완하여 하나의 완벽한 프레임워크처럼 사용되기도 합니다.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid2>
        <Grid2 size={3} sx={{ mt: 3, ml: 1 }} pacing={1}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="number">
                  4
                </Avatar>
              }
              // action={     // 기능 사용하게 있을지 고민 필요
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={`${word}`}
              subheader="2024-11-24"
            />
            <CardMedia
              component="img"
              height="150"
              image="./react.png"
              alt={`${word}_img`}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                React라는 용어를 chatGpt를 통해 문의하여 저장해 두었던
                사전입니다.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="level">
                <SentimentVerySatisfiedIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  React는 Facebook(현재 Meta Platforms)에 의해 개발된 오픈 소스
                  자바스크립트 라이브러리로, 사용자 인터페이스(UI)를 구축하기
                  위해 사용됩니다. React는 컴포넌트 기반 아키텍처를 기반으로
                  하며, 이를 통해 대규모 애플리케이션의 UI를 모듈화하고 재사용
                  가능하게 설계할 수 있습니다.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  주요 특징은 다음과 같습니다: 1. **컴포넌트 기반**: UI를
                  독립적인 컴포넌트 단위로 나누어 설계할 수 있습니다. 각
                  컴포넌트는 자체적인 상태와 로직을 가질 수 있어 관리가
                  용이합니다. 2. **가상 DOM(Virtual DOM)**: React는 변경 사항이
                  실제 DOM에 반영되기 전에 가상 DOM을 통해 변경을 먼저
                  처리하므로, 실제 DOM 조작 횟수를 최소화하여 성능을
                  최적화합니다. 3. **단방향 데이터 바인딩**: 데이터의 흐름이
                  위에서 아래로 일정하게 유지되어 데이터의 변화를 예측하기 쉽고
                  디버깅이 용이합니다. 4. **JSX**: JavaScript를 확장한 문법으로,
                  HTML과 유사한 코드를 사용하여 자바스크립트 파일 안에 UI
                  컴포넌트를 정의할 수 있습니다.
                </Typography>
                {/* <Typography sx={{ marginBottom: 2 }}>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.) */}
                {/* </Typography> */}
                <Typography>
                  React는 단순한 뷰 라이브러리로 시작했지만, 현대 웹 개발에서
                  매우 중요한 역할을 차지하고 있으며, 다양한 도구와 생태계가
                  이를 보완하여 하나의 완벽한 프레임워크처럼 사용되기도 합니다.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Dictionary;
