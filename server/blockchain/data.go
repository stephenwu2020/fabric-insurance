package blockchain

import (
	"time"
)

// Key consists of prefix + UUID of the contract type
type ContractType struct {
	ShopType        string  `json:"shop_type"`
	FormulaPerDay   string  `json:"formula_per_day"`
	MaxSumInsured   float32 `json:"max_sum_insured"`
	TheftInsured    bool    `json:"theft_insured"`
	Description     string  `json:"description"`
	Conditions      string  `json:"conditions"`
	Active          bool    `json:"active"`
	MinDurationDays int32   `json:"min_duration_days"`
	MaxDurationDays int32   `json:"max_duration_days"`
}

type ContractTypeWithUUID struct {
	UUID string `json:"uuid"`
	*ContractType
}

// Key consists of prefix + username + UUID of the contract
type Contract struct {
	Username         string    `json:"username"`
	Item             item      `json:"item"`
	StartDate        time.Time `json:"start_date"`
	EndDate          time.Time `json:"end_date"`
	Void             bool      `json:"void"`
	ContractTypeUUID string    `json:"contract_type_uuid"`
	ClaimIndex       []string  `json:"claim_index,omitempty"`
}

// Entity not persisted on its own
type item struct {
	ID          int32   `json:"id"`
	Brand       string  `json:"brand"`
	Model       string  `json:"model"`
	Price       float32 `json:"price"`
	Description string  `json:"description"`
	SerialNo    string  `json:"serial_no"`
}

// Key consists of prefix + UUID of the contract + UUID of the claim
type Claim struct {
	ContractUUID  string      `json:"contract_uuid"`
	Date          time.Time   `json:"date"`
	Description   string      `json:"description"`
	IsTheft       bool        `json:"is_theft"`
	Status        ClaimStatus `json:"status"`
	Reimbursable  float32     `json:"reimbursable"`
	Repaired      bool        `json:"repaired"`
	FileReference string      `json:"file_reference"`
}

type ClaimStatus int8

// Key consists of prefix + username
type user struct {
	Username      string   `json:"username"`
	Password      string   `json:"password"`
	FirstName     string   `json:"first_name"`
	LastName      string   `json:"last_name"`
	ContractIndex []string `json:"contracts"`
}

// Key consists of prefix + UUID fo the repair order
type repairOrder struct {
	ClaimUUID    string `json:"claim_uuid"`
	ContractUUID string `json:"contract_uuid"`
	Item         item   `json:"item"`
	Ready        bool   `json:"ready"`
}
