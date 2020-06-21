package blockchain

import (
	"github.com/hyperledger/fabric-sdk-go/pkg/client/channel"
	"github.com/hyperledger/fabric-sdk-go/pkg/core/config"
	"github.com/hyperledger/fabric-sdk-go/pkg/fabsdk"
)

// settings
var (
	SDK           *fabsdk.FabricSDK          // sdk handler
	ChannelName   = "assetschannel"          // channel
	ChainCodeName = "insurance"              // chaincode name
	Org           = "org1"                   // org name
	User          = "Admin"                  // user
	ConfigPath    = "blockchain/config.yaml" // config
	EndPoint      = "peer1.org1.example.com" // client endpoint
)

// Init fabric sdk
func Init() {
	var err error
	SDK, err = fabsdk.New(config.FromFile(ConfigPath))
	if err != nil {
		panic(err)
	}
}

// ChannelExecute invoke chaincode and update
func ChannelExecute(fcn string, args [][]byte) (channel.Response, error) {
	// create channel ctx
	ctx := SDK.ChannelContext(ChannelName, fabsdk.WithOrg(Org), fabsdk.WithUser(User))
	cli, err := channel.New(ctx)
	if err != nil {
		return channel.Response{}, err
	}
	// call invoke method
	resp, err := cli.Execute(channel.Request{
		ChaincodeID: ChainCodeName,
		Fcn:         fcn,
		Args:        args,
	}, channel.WithTargetEndpoints(EndPoint))
	if err != nil {
		return channel.Response{}, err
	}
	return resp, nil
}

// ChannelQuery invoke chaincode and query
func ChannelQuery(fcn string, args [][]byte) (channel.Response, error) {
	// create channel ctx
	ctx := SDK.ChannelContext(ChannelName, fabsdk.WithOrg(Org), fabsdk.WithUser(User))
	cli, err := channel.New(ctx)
	if err != nil {
		return channel.Response{}, err
	}
	// call invoke
	resp, err := cli.Query(channel.Request{
		ChaincodeID: ChainCodeName,
		Fcn:         fcn,
		Args:        args,
	}, channel.WithTargetEndpoints(EndPoint))
	if err != nil {
		return channel.Response{}, err
	}
	return resp, nil
}
